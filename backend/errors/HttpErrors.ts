/* eslint-disable import/prefer-default-export */
export class NotFound extends Error {
  private readonly statusCode: number = 404;

  constructor(message: string) {
    super(message);
    this.name = 'NotFound';
  }

  get getStatusCode(): number {
    return this.statusCode;
  }
}
