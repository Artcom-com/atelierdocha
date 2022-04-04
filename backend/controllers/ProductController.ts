/* eslint-disable no-console */
import { NextApiRequest } from 'next';
import { validationField } from '../../src/utils/validations';
import { FormHandleAdapter } from '../adapters/FormHandleAdapter';
import { ImageHandleAdapter } from '../adapters/ImageHandleAdapter';
import { ProductModel } from '../data/model/ProductModel';
import handleErrors from '../errors/handleErrors';
import {
  created, HttpResponse, ok, okWithContent, serverError,
} from '../helpers/http';
import Validations from '../helpers/Validations';
import ProductRepository from '../repositories/ProductRepository';

export default class ProductController {
  private readonly repository: ProductRepository = new ProductRepository();

  private readonly validations: Validations = new Validations();

  private readonly formHandle: FormHandleAdapter;

  private readonly imageHandle: ImageHandleAdapter;

  constructor(formHandle: FormHandleAdapter, imageHandle: ImageHandleAdapter) {
    this.formHandle = formHandle;
    this.imageHandle = imageHandle;
  }

  async findById(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { id } = req.query;

      this.validations.validtionUnique(id);

      const product = await this.repository.findById(id as string);

      return okWithContent(product);
    } catch (err) {
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  async add(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { fields, filepath } = await this.formHandle.handleForm(req);

      const imagePresentationUrl = await this.imageHandle.saveImage(filepath);
      const { name, price } = fields;

      this.validations.validateProduct({ imagePresentationUrl, name, price });

      await this.repository.add({ imagePresentationUrl, name, price });
      return created('Produto criado com sucesso!');
    } catch (err) {
      console.log(err);
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  async delete(req: NextApiRequest):Promise<HttpResponse> {
    try {
      const { id } = req.query;
      this.validations.validtionUnique(id);
      const product = await this.repository.findById(String(id));
      await this.imageHandle.delete(product.imagePresentationUrl);
      await this.repository.delete(String(id));
      return ok('Deletado com sucesso!');
    } catch (err) {
      console.log(err);
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  // eslint-disable-next-line max-len
  async populateProductInfos(product: Partial<ProductModel>, filePath: string): Promise<Partial<ProductModel>> {
    const infos: Partial<ProductModel> = {};

    if (!validationField(filePath)) {
      infos.imagePresentationUrl = await this.imageHandle.saveImage(filePath);
    }

    const { name, price } = product;
    if (name !== undefined) infos.name = name;
    if (price !== undefined) infos.price = price;

    return infos;
  }

  async update(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { id } = req.query;
      this.validations.validtionUnique(id);
      const { fields, filepath } = await this.formHandle.handleForm(req);

      // eslint-disable-next-line max-len
      const infos = await this.populateProductInfos({ name: fields.name, price: fields.price }, filepath);

      await this.repository.update(String(id), { ...infos });
      return ok('Produto atualizado com sucesso!');
    } catch (err) {
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  async pinProduct(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { id } = req.query;
      const { pinned } = req.body;
      this.validations.validtionUnique(id);
      this.validations.validtionUnique(pinned);
      await this.repository.update(String(id), { pinned: (pinned as boolean) });
      if (pinned === false) {
        return ok('Produto foi fixado no da primeira página.');
      }
      return ok('Produto retirado da primeira página.');
    } catch (err) {
      console.log(err);
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  async pagination(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { page } = req.query;
      this.validations.validtionUnique(page);
      const products = await this.repository.pagination(Number(page));

      return okWithContent(products);
    } catch (err) {
      console.log(err);
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }
}
