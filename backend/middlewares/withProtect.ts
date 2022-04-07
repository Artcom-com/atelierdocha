import { NextApiRequest, NextApiResponse } from 'next';
import { HttpResponse, serverError } from '../helpers/http';
import { UserModel } from '../data/model/UserModel';
import JWTService from '../services/JWTAdapter';
import connect from '../data/mongodb/mongodb';
import UserRepository from '../repositories/UserRepository';
import Validations from '../helpers/Validations';
import handleErrors from '../errors/handleErrors';

export interface GetUserAuthInfoRequest extends NextApiRequest {
  user: Omit<UserModel, 'password'> // or any other type
}

export type HandlerFunction = (req: NextApiRequest, res: NextApiResponse<Partial<HttpResponse>>) => Promise<void>;

const withProtect = (handler: HandlerFunction) => async (req: GetUserAuthInfoRequest, res: NextApiResponse) => {
  if (req.headers?.authorization === undefined) {
    return res.status(401).json({ error: 'Por favor, faça login para ter acesso!' });
  }

  const { authorization } = req.headers;

  try {
    const jwtService = new JWTService();
    const validation = new Validations();
    validation.validationAuthToken(authorization);

    const decoded = jwtService.verify(authorization.split(' ')[1]) as Omit<UserModel, 'password'>;
    await connect();
    const repository = new UserRepository();
    validation.validationInfo(decoded.id);
    const user = await repository.findById(decoded.id as string);
    validation.validateUser(user);

    req.user = user;
    return await handler(req, res);
  } catch (err) {
    console.log(err);
    const error = handleErrors(err as Error);
    if (error !== undefined) {
      return error;
    }
    return serverError('Erro de servidor. Se persistir, contate um responsável.');
  }
};

export default withProtect;
