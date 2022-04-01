import { badRequest, HttpResponse, notFound } from '../helpers/http';
import { HttpErrors } from './HttpErrors';

const handleErrors = (error: Error): HttpResponse | undefined => {
  if (error instanceof HttpErrors.NotFound) {
    return notFound(error);
  }

  if (error instanceof HttpErrors.BadRequest) {
    return badRequest(error);
  }

  return undefined;
};

export default handleErrors;
