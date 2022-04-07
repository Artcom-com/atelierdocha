// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../../backend/data/mongodb/mongodb';
import makeProductController from '../../../../backend/factory/makeProductController';
import { HttpResponse } from '../../../../backend/helpers/http';
import withProtect from '../../../../backend/middlewares/withProtect';

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Omit<HttpResponse, 'statusCode'>>,
) {
  const controller = makeProductController();
  await connect();
  if (req.method === 'PUT') {
    const response = await controller.update(req);
    if (response.error) {
      return res.status(response.statusCode).json({ error: response.error });
    }
    return res.status(response.statusCode).json({ message: String(response.message) });
  }

  if (req.method === 'DELETE') {
    const response = await controller.delete(req);
    if (response.error) {
      return res.status(response.statusCode).json({ error: response.error });
    }
    return res.status(response.statusCode).json({ message: String(response.message) });
  }

  const response = await controller.findById(req);
  if (response.error) {
    return res.status(response.statusCode).json({ error: response.error });
  }
  return res.status(response.statusCode).json({ content: response.content });
}

export default withProtect(handler);
