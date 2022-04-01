import { Db, MongoClient } from 'mongodb';
import { ProductModel } from '../data/model/ProductModel';
import { ProductCases } from '../data/usecases/products/ProductsCases';
import cacheConnection from '../data/mongodb/connection';
import connect from '../data/mongodb/mongodb';

export default class ProductRepository implements ProductCases {
  private client: MongoClient | undefined;

  private db: Db | undefined;

  async connect(): Promise<void> {
    if (cacheConnection.cachedClient === null || cacheConnection.cachedDb === null) {
      await connect();
    }

    if (cacheConnection.cachedClient !== null && cacheConnection.cachedDb !== null) {
      this.client = cacheConnection.cachedClient;
      this.db = cacheConnection.cachedDb;
    }
  }

  async add(infos: ProductModel): Promise<void> {
    if (this.db !== undefined) {
      await this.db.collection('products').insertOne({
        ...infos,
        created_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
        updated_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      });
    }
  }
}
