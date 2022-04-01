import { validationField } from '../../src/utils/validations';
import { ProductModel } from '../data/model/ProductModel';
import { HttpErrors } from '../errors/HttpErrors';

export default class Validations {
  validationBody(body: ProductModel | undefined) {
    if (body === undefined) {
      throw new HttpErrors.BadRequest('Não foi possível obter os dados enviados.');
    }
  }

  validateProduct(infos: Omit<ProductModel, 'pinned'>) {
    const { imagePresentationUrl, name, price } = infos;

    if (validationField(name) || validationField(price) || validationField(imagePresentationUrl)) {
      throw new HttpErrors.BadRequest('É preciso preencher todos os dados.');
    }
  }
}
