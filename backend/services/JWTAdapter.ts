import jwt from 'jsonwebtoken';
import { WebTokenAdapter } from '../adapters/WebTokenAdapter';
import { UserModel } from '../data/model/UserModel';

export default class JWTService implements WebTokenAdapter {
  sign(payload: Omit<UserModel, 'password'>, expiresIn: string | number): string {
    return jwt.sign(payload, `${process.env.JWT_SECRET}` as string, {
      expiresIn,
    });
  }

  verify(token: string): Omit<UserModel, 'password'> {
    const { id, email } = jwt.verify(token, `${process.env.JWT_SECRET}` as string) as Omit<UserModel, 'password'>;
    return {
      id,
      email,
    };
  }
}
