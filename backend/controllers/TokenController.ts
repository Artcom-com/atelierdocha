/* eslint-disable no-console */
import { TokenExpiredError } from 'jsonwebtoken';
import { NextApiRequest } from 'next';
import { WebTokenAdapter } from '../adapters/WebTokenAdapter';
import { UserModel } from '../data/model/UserModel';
import handleErrors from '../errors/handleErrors';
import { HttpErrors } from '../errors/HttpErrors';
import {
  badRequest, HttpResponse, okWithPayload, serverError,
} from '../helpers/http';
import Validations from '../helpers/Validations';
import UserRepository from '../repositories/UserRepository';

export default class TokenController {
  private readonly validations: Validations = new Validations();

  private readonly repository: UserRepository = new UserRepository();

  private readonly webToken: WebTokenAdapter;

  constructor(
    webToken: WebTokenAdapter,
  ) {
    this.webToken = webToken;
  }

  async getUserById(id: string): Promise<UserModel> {
    const user = await this.repository.findById(String(id));

    if (user === undefined) {
      throw new HttpErrors.NotFound('Usuário não existe.');
    }

    return user;
  }

  async handleLogin(req: NextApiRequest): Promise<HttpResponse> {
    try {
      const { id, email, password } = req.body as UserModel;

      this.validations.validtionInfo(id);
      this.validations.validateUser({ email, password });
      await this.getUserById(String(id));

      const payload = this.webToken.sign({
        id,
        email,
      }, '2d');

      const userInfo = {
        id,
        email,
      };

      return okWithPayload(payload, userInfo);
    } catch (err) {
      console.log(err);
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }

  async handleRecoverUserInfos(token: string): Promise<HttpResponse> {
    try {
      this.validations.validtionInfo(token);

      const result = this.webToken.verify(token);

      const user = await this.getUserById(String(result.id));

      const newToken = this.webToken.sign({
        id: user.id,
        email: user.email as string,
      }, '2d');

      return okWithPayload(newToken, {
        id: user.id,
        email: user.email as string,
      });
    } catch (err: unknown | Error | TokenExpiredError) {
      if (err instanceof TokenExpiredError) {
        return badRequest(new HttpErrors.BadRequest('Token expirado'));
      }
      const error = handleErrors(err as Error);
      if (error !== undefined) {
        return error;
      }
      return serverError('Erro de servidor. Se persistir, contate um responsável.');
    }
  }
}
