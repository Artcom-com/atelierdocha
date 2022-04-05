export namespace ServerErrors {
  export class DbNotInitialized extends Error {
    private readonly statusCode: number = 500;

    constructor() {
      super('Database not initialized.');
      this.name = 'DbNotInitialized';
    }

    get getStatusCode(): number {
      return this.statusCode;
    }
  }
}
