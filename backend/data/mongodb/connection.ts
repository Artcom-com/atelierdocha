import { MongoClient, Db } from 'mongodb';

export interface MongoCache {
  cachedClient: MongoClient | null
  cachedDb: Db | null
}

const cacheConnection: MongoCache = {
  cachedClient: null,
  cachedDb: null,
};

export default cacheConnection;
