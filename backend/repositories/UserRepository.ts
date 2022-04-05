import { Db, ObjectId } from 'mongodb';
import { UserModel } from '../data/model/UserModel';
import cacheConnection from '../data/mongodb/connection';
import connect from '../data/mongodb/mongodb';
import { UsersCases } from '../data/usecases/users/UsersCases';

export default class UserRepository implements UsersCases {
  private db: Db | undefined;

  async connect(): Promise<void> {
    if (cacheConnection.cachedClient === null || cacheConnection.cachedDb === null) {
      await connect();
    }

    if (cacheConnection.cachedClient !== null && cacheConnection.cachedDb !== null) {
      this.db = cacheConnection.cachedDb;
    }
  }

  async checkIfDBIsConnected(): Promise<void> {
    if (this.db === undefined) {
      await this.connect();
    }
  }

  async add(infos: UserModel): Promise<void> {
    await this.checkIfDBIsConnected();
    await (this.db as Db).collection('users').insertOne({
      ...infos,
      created_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      updated_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    });
  }

  async findById(id: string): Promise<UserModel> {
    await this.checkIfDBIsConnected();
    const user = await (this.db as Db).collection<UserModel>('users').find({
      _id: new ObjectId(id),
    }).toArray();

    return user[0];
  }

  async findByEmail(email: string): Promise<UserModel> {
    await this.checkIfDBIsConnected();
    const user = await (this.db as Db).collection('users').find({
      email,
    }).toArray();

    const { _id, ...rest } = user[0];

    return {
      id: _id.toString(),
      ...rest as Omit<UserModel, 'id'>,
    };
  }

  async update(id: string, infos: UserModel): Promise<void> {
    await this.checkIfDBIsConnected();

    await (this.db as Db).collection('users').updateOne({ _id: new ObjectId(id) }, {
      $set: {
        ...infos,
        updated_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.checkIfDBIsConnected();

    await (this.db as Db).collection('users').deleteOne({ _id: new ObjectId(id) });
  }
}
