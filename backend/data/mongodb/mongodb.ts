import { MongoClient } from 'mongodb';
import cacheConnection from './connection';

const connect = async (): Promise<void> => {
  if (!cacheConnection.cachedClient || !cacheConnection.cachedDb) {
    console.log('connected!');
    const clientConnect = await MongoClient.connect(String(process.env.DATABASE_URL_MONGO));
    const dbConnect = clientConnect.db('teste');
    cacheConnection.cachedClient = clientConnect;
    cacheConnection.cachedDb = dbConnect;
  }
};

export default connect;
