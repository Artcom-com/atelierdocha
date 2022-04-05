import { UserModel } from '../data/model/UserModel';

export interface WebTokenAdapter {
  sign(payload: Omit<UserModel, 'password'>, expiresIn: string | number): string
  verify(token: string): Omit<UserModel, 'password'>
}
