import { MongoServerError } from 'mongodb';
import { badRequest, HttpResponse, notFound } from '../helpers/http';
import { HttpErrors } from './HttpErrors';

const handleErrors = (error: Error): HttpResponse | undefined => {
  if (error instanceof HttpErrors.NotFound) {
    return notFound(error);
  }

  if (error instanceof HttpErrors.BadRequest) {
    return badRequest(error);
  }

  if (error instanceof MongoServerError) {
    if (error.message.includes('E11000')) {
      return badRequest(new HttpErrors.BadRequest('E-mail já em uso.'));
    }
  }

  return undefined;
};

export default handleErrors;
