import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../../backend/data/mongodb/mongodb';
import makeUserController from '../../../../backend/factory/makeUserController';
import { HttpResponse } from '../../../../backend/helpers/http';
import withProtect from '../../../../backend/middlewares/withProtect';

async function handlerCreateUser(
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

export default withProtect(handlerCreateUser);
