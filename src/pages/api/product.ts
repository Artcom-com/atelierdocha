// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import ProductController from '../../../backend/controllers/ProductController';
import connect from '../../../backend/data/mongodb/mongodb';
import FormidableAdapater from '../../../backend/helpers/FormidableAdapter';
import ProductRepository from '../../../backend/repositories/ProductRepository';
import CloudinaryAdapter from '../../../backend/services/CloudinaryAdapter';

type Data = {
  name: string
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    await connect();
    const repository = new ProductRepository();
    await repository.connect();

    const formHandle = new FormidableAdapater();
    const imageHandle = new CloudinaryAdapter();
    const controller = new ProductController(formHandle, imageHandle);
    const response = await controller.add(req);
    // eslint-disable-next-line no-console
    console.log(response);
    return res.status(200).json({ name: 'John Doe' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return res.status(200).json({ name: 'John Doe' });
  }
}
