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
    const response = await repository.delete('62472f6d230f7e512091ccb5');
    // const response = await repository.findPinneds();
    console.log(response);
    return res.status(200).json({ name: 'John Doe' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return res.status(200).json({ name: 'John Doe' });
  }
}
