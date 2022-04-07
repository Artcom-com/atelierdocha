/* eslint-disable max-classes-per-file */
export namespace HttpErrors {
  export interface HttpError {
    getStatusCode: number
  }

  export class NotFound extends Error implements HttpError {
    private readonly statusCode: number = 404;

    constructor(message: string) {
      super(message);
      this.name = 'NotFound';
    }

    get getStatusCode(): number {
      return this.statusCode;
    }
  }

  export class BadRequest extends Error implements HttpError {
    private readonly statusCode: number = 400;

    constructor(message: string) {
      super(message);
      this.name = 'BadRequest';
    }

    get getStatusCode(): number {
      return this.statusCode;
    }
  }

  export class Unauthorized extends Error implements HttpError {
    private readonly statusCode: number = 401;

    constructor(message: string) {
      super(message);
      this.name = 'Unauthorized';
    }

    get getStatusCode(): number {
      return this.statusCode;
    }
  }
}
