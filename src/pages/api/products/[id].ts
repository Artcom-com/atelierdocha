// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../../backend/data/mongodb/mongodb';
import makeProductController from '../../../../backend/factory/makeProductController';
import { HttpResponse } from '../../../../backend/helpers/http';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Omit<HttpResponse, 'statusCode'>>,
) {
  const controller = makeProductController();
  let response: HttpResponse = {
    statusCode: 0,
    message: '',
  };
  await connect();
  if (req.method === 'PUT') {
    response = await controller.update(req);
  }

  if (req.method === 'DELETE') {
    response = await controller.delete(req);
  }

  return res.status(response.statusCode).json({ message: String(response.message) });
}
