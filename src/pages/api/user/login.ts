import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../../backend/data/mongodb/mongodb';
import makeTokenController from '../../../../backend/factory/makeTokenController';
import { HttpResponse } from '../../../../backend/helpers/http';

export default async function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse<Partial<HttpResponse>>,
) {
  await connect();
  const tokenController = makeTokenController();

  const response = await tokenController.handleLogin(req);

  if (response.error) {
    const { error } = response;
    return res.status(response.statusCode).json({ error });
  }

  const { payload, content } = response;
  return res.status(response.statusCode).json({ payload, content });
}
