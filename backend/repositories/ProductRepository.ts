import { Db, ObjectId } from 'mongodb';
import { ProductModel } from '../data/model/ProductModel';
import { ProductCases } from '../data/usecases/products/ProductsCases';
import cacheConnection from '../data/mongodb/connection';
import connect from '../data/mongodb/mongodb';

export default class ProductRepository implements ProductCases {
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

  async findById(id: string): Promise<ProductModel> {
    await this.checkIfDBIsConnected();

    const products = await (this.db as Db).collection<ProductModel>('products').find({ _id: new ObjectId(id) }, {
      projection: {
        imagePresentationUrl: 1, name: 1, price: 1, pinned: 1,
      },
    }).toArray();

    return products[0];
  }

  async findPinneds(): Promise<ProductModel[]> {
    await this.checkIfDBIsConnected();

    const products = await (this.db as Db).collection<ProductModel>('products').find({ pinned: true }, {
      projection: {
        imagePresentationUrl: 1, name: 1, price: 1, pinned: 1,
      },
    }).toArray();

    return products;
  }

  async add(infos: Omit<ProductModel, 'pinned'>): Promise<void> {
    await this.checkIfDBIsConnected();
    await (this.db as Db).collection('products').insertOne({
      ...infos,
      pinned: false,
      created_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      updated_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    });
  }

  async update(id: string, infos: Partial<ProductModel>): Promise<void> {
    await this.checkIfDBIsConnected();

    await (this.db as Db).collection('products').updateOne({ _id: new ObjectId(id) }, {
      $set: {
        ...infos,
        updated_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      },
    });
  }

  async delete(id: string): Promise<number> {
    await this.checkIfDBIsConnected();

    const result = await (this.db as Db).collection('products').deleteOne({ _id: new ObjectId(id) });

    return result.deletedCount;
  }

  async pagination(page: number): Promise<ProductModel[]> {
    await this.checkIfDBIsConnected();

    const products = await (this.db as Db).collection<ProductModel>('products').find({}, {
      projection: {
        _id: 1,
        name: 1,
        price: 1,
        pinned: 1,
        id: '$_id',
      },
    }).skip(4 * page).limit(4)
      .toArray();

    return products;
  }
}
