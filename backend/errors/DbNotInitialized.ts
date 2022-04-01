export default class DbNotInitialized extends Error {
  constructor() {
    super('Database not initialized.');
    this.name = 'DbNotInitialized';
  }
}
