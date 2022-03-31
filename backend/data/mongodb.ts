import { MongoClient } from 'mongodb';
import cacheConnection from './connection';

const connect = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    if (!cacheConnection.cachedClient && !cacheConnection.cachedDb) {
      const clientConnect = await MongoClient.connect(String(process.env.DATABASE_URL_MONGO));
      const dbConnect = clientConnect.db('artcom');
      cacheConnection.cachedClient = clientConnect;
      cacheConnection.cachedDb = dbConnect;
    }
  }
};

export default connect;
