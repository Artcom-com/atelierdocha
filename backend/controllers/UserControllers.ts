/* eslint-disable no-console */
import { NextApiRequest } from 'next';
import { validateEmail } from '../../src/utils/validations';
import { UserModel } from '../data/model/UserModel';
import handleErrors from '../errors/handleErrors';
import { HttpErrors } from '../errors/HttpErrors';
import {
  HttpResponse, ok, okWithContent, serverError,
} from '../helpers/http';
import Validations from '../helpers/Validations';
import UserRepository from '../repositories/UserRepository';

export default class UserController {
  private readonly repository: UserRepository = new UserRepository();

  private readonly validations: Validations = new Validations();

  async add(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { email, password } = req.body as UserModel;
      this.validations.validateUser({ email, password });
      await this.repository.add({ email, password });
      return ok('Usuário criado com sucesso!');
    } catch (err) {
      console.log(err);
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  async findById(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { id } = req.query;
      this.validations.validtionInfo(String(id));
      const user = await this.repository.findById(String(id));
      this.validations.checkIfExists(user, 'Usuário');
      return okWithContent(user);
    } catch (err) {
      console.log(err);
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  populateUserInfos(user: Partial<UserModel>): Partial<UserModel> {
    const infos: Partial<UserModel> = {};

    const { email, password } = user;

    if (email !== undefined && !validateEmail(email)) {
      throw new HttpErrors.BadRequest('E-mail inválido');
    }

    if (email !== undefined) infos.email = email;
    if (password !== undefined) infos.password = password;

    return infos;
  }

  async update(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { id } = req.query;
      const { email, password } = req.body as UserModel;

      this.validations.validtionInfo(id);
      this.populateUserInfos({ email, password });

      await this.repository.update(String(id), { email, password });

      return ok('Usuário atualizado com sucesso!');
    } catch (err) {
      console.log(err);
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  async delete(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { id } = req.query;

      this.validations.validtionInfo(id);

      await this.repository.delete(String(id));

      return ok('Usuário deletado com sucesso!');
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
