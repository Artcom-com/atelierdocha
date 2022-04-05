import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../../backend/data/mongodb/mongodb';
import makeUserController from '../../../../backend/factory/makeUserController';
import { HttpResponse } from '../../../../backend/helpers/http';

export default async function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse<Partial<HttpResponse>>,
) {
  await connect();
  const tokenController = makeUserController();

  const response = await tokenController.add(req);

  if (response.error) {
    const { error } = response;
    return res.status(response.statusCode).json({ error });
  }

  const { message } = response;
  return res.status(response.statusCode).json({ message });
}
