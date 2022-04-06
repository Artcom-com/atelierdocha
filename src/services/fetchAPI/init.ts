import FetchAPI from './fetchAPI';
import { HttpResponse } from '../../../backend/helpers/http';

const createAPI = (): FetchAPI<HttpResponse> => {
  if (process.env.NODE_ENV === 'production') {
    return new FetchAPI('https://atelierdocha.vercel.app/api');
  }

  return new FetchAPI('http://localhost:3000/api');
};

const api = createAPI();

export default api;
