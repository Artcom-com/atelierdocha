// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
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
  const response = await controller.add(req);
  if (response.error) {
    return res.status(response.statusCode).json({ error: response.error });
  }
  return res.status(response.statusCode).json({ message: response.message });
}
