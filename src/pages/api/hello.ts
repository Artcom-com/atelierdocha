// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../backend/data/mongodb/mongodb';
import ProductRepository from '../../../backend/repositories/ProductRepository';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    await connect();
    const repository = new ProductRepository();
    await repository.connect();
    await repository.add({
      name: 'name',
      imagePresentationUrl: 'www.image.com/image.png',
      pinned: true,
      price: '99,9',
    });
    return res.status(200).json({ name: 'John Doe' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return res.status(200).json({ name: 'John Doe' });
  }
}
