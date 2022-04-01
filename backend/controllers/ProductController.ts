import { NextApiRequest } from 'next';
import { FormHandleAdapter } from '../adapters/FormHandleAdapter';
import { ImageHandleAdapter } from '../adapters/ImageHandleAdapter';
import handleErrors from '../errors/handleErrors';
import {
  created, HttpResponse, serverError,
} from '../helpers/http';
import Validations from '../helpers/Validations';
import ProductRepository from '../repositories/ProductRepository';

export default class ProductController {
  private readonly repository: ProductRepository = new ProductRepository();

  private readonly validations: Validations = new Validations();

  private readonly formHandle: FormHandleAdapter;

  private readonly imageHandle: ImageHandleAdapter;

  constructor(formHandle: FormHandleAdapter, imageHandle: ImageHandleAdapter) {
    this.repository.connect();
    this.formHandle = formHandle;
    this.imageHandle = imageHandle;
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
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }
}
