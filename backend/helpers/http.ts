import { NextApiRequest } from 'next';
import { ProductModel } from '../data/model/ProductModel';
import { HttpErrors } from '../errors/HttpErrors';

export interface HttpResponse {
  statusCode: number
  error?: string
  message?: string
  content?: unknown
  payload?: string
}

export interface HttpRequest extends NextApiRequest {
  body: {
    products?: ProductModel
  }
}

export const ok = (message: string): HttpResponse => ({
  statusCode: 200,
  message,
});

export const okWithContent = (content: unknown): HttpResponse => ({
  statusCode: 200,
  content,
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
