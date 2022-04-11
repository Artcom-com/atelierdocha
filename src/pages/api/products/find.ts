import type { NextApiRequest, NextApiResponse } from 'next';
import makeProductController from '../../../../backend/factory/makeProductController';
import { HttpResponse } from '../../../../backend/helpers/http';
import withProtect from '../../../../backend/middlewares/withProtect';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Omit<HttpResponse, 'statusCode'>>,
) {
  const controller = makeProductController();
  const response = await controller.findByName(req);
  if (response.error) {
    return res.status(response.statusCode).json({ error: response.error });
  }
  return res.status(response.statusCode).json({ content: response.content });
}

export default withProtect(handler);
