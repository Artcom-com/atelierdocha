// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../../../backend/data/mongodb/mongodb';
import makeProductController from '../../../../../backend/factory/makeProductController';
import { HttpResponse } from '../../../../../backend/helpers/http';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Omit<HttpResponse, 'statusCode'>>,
) {
  const controller = makeProductController();
  await connect();
  const response = await controller.getPinneds();
  if (response.error) {
    return res.status(response.statusCode).json({ error: response.error });
  }
  return res.status(response.statusCode).json({ content: response.content });
}
