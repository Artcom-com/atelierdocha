import { Db, MongoClient, ObjectId } from 'mongodb';
import { ProductModel } from '../data/model/ProductModel';
import { ProductCases } from '../data/usecases/products/ProductsCases';
import cacheConnection from '../data/mongodb/connection';
import connect from '../data/mongodb/mongodb';
import DbNotInitialized from '../errors/DbNotInitialized';
import { NotFound } from '../errors/HttpErrors';

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

  async findById(id: string): Promise<ProductModel> {
    if (this.db === undefined) {
      throw new DbNotInitialized();
    }

    const products = await this.db.collection<ProductModel>('products').findOne({ _id: new ObjectId(id) });

    if (products === null) {
      throw new NotFound(`Produto de ID ${id} não existe.`);
    }

    const {
      imagePresentationUrl, name, pinned, price,
    } = products;

    return {
      imagePresentationUrl, name, pinned, price,
    };
  }

  async findPinneds(): Promise<ProductModel[]> {
    if (this.db === undefined) {
      throw new DbNotInitialized();
    }

    const products = await this.db.collection<ProductModel>('products').find({ pinned: true }, {
      projection: {
        imagePresentationUrl: 1, name: 1, price: 1, pinned: 1,
      },
    }).toArray();

    if (products === null || products.length <= 0) {
      throw new NotFound('Não há produtos cadastrados.');
    }

    return products;
  }

  async add(infos: ProductModel): Promise<void> {
    if (this.db === undefined) {
      throw new DbNotInitialized();
    }
    await this.db.collection('products').insertOne({
      ...infos,
      created_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      updated_at: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    });
  }
}
