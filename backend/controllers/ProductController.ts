import { ProductModel } from '../data/model/ProductModel';
import handleErrors from '../errors/handleErrors';
import { created, HttpResponse, serverError } from '../helpers/http';
import Validations from '../helpers/Validations';
import ProductRepository from '../repositories/ProductRepository';

export default class ProductController {
  private readonly repository: ProductRepository = new ProductRepository();

  private readonly validations: Validations = new Validations();

  constructor() {
    this.repository.connect();
  }

  async add(infos: ProductModel): Promise<HttpResponse> {
    try {
      const { imagePresentationUrl, name, price } = infos;
      // service.upload()
      this.validations.validateProduct({ imagePresentationUrl, name, price });

      await this.repository.add(infos);
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
