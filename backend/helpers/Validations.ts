import { validateEmail, validationField } from '../../src/utils/validations';
import { ProductModel } from '../data/model/ProductModel';
import { UserModel } from '../data/model/UserModel';
import { HttpErrors } from '../errors/HttpErrors';

export default class Validations {
  validtionInfo(info: unknown | undefined) {
    if (info === undefined || info === '') {
      throw new HttpErrors.BadRequest('Não foi possível obter nada com os dados enviados.');
    }

    if (info instanceof String && validationField(info as string)) {
      throw new HttpErrors.BadRequest('Não foi possível obter os dados enviados.');
    }
  }

  checkIfExists(infos: unknown, entitySearch: string) {
    if (infos === []
      || (Array.isArray(infos) && infos.length <= 0)
      || infos === undefined
      || infos === null
    ) {
      throw new HttpErrors.NotFound(`${entitySearch} não encontrado.`);
    }
  }

  validateProduct(infos: Omit<ProductModel, 'pinned'>) {
    const { name, price } = infos;

    if (validationField(name) || validationField(price)) {
      throw new HttpErrors.BadRequest('É preciso preencher todos os dados.');
    }
  }

  validateUser(infos: UserModel) {
    const { email, password } = infos;

    if (validationField(email) || validationField(password)) {
      throw new HttpErrors.BadRequest('É preciso preencher todos os dados.');
    }

    if (!validateEmail(email)) {
      throw new HttpErrors.BadRequest('E-mail inválido.');
    }
  }
}
