import { UserModel } from '../../model/UserModel';

export interface UsersCases {
  add(infos: UserModel): Promise<void>
  findById(id: string): Promise<UserModel>
  update(id: string, infos: UserModel): Promise<void>
  delete(id: string): Promise<void>
}
