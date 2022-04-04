import { validationField } from '../../src/utils/validations';
import { ProductModel } from '../data/model/ProductModel';
import { HttpErrors } from '../errors/HttpErrors';

export default class Validations {
  validtionUnique(body: unknown | undefined) {
    if (body === undefined || body === '') {
      throw new HttpErrors.BadRequest('Não foi possível obter os dados enviados.');
    }
  }

  validateProduct(infos: Omit<ProductModel, 'pinned'>) {
    const { name, price } = infos;

    if (validationField(name) || validationField(price)) {
      throw new HttpErrors.BadRequest('É preciso preencher todos os dados.');
    }
  }
}
