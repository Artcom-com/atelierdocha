import { HttpErrors } from '../errors/HttpErrors';

export interface HttpResponse {
  statusCode: number
  error?: string
  message?: string
  content?: string
  payload?: string
}

export const ok = (message: string): HttpResponse => ({
  statusCode: 200,
  message,
});

export const created = (message: string): HttpResponse => ({
  statusCode: 201,
  message,
});

export const serverError = (message: string): HttpResponse => ({
  statusCode: 500,
  message,
});

export const notFound = (error: HttpErrors.NotFound): HttpResponse => ({
  statusCode: error.getStatusCode,
  error: error.message,
});

export const badRequest = (error: HttpErrors.BadRequest): HttpResponse => ({
  statusCode: error.getStatusCode,
  error: error.message,
});
