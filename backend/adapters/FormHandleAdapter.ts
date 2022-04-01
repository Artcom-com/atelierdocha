import { NextApiRequest } from 'next';
import { ProductModel } from '../data/model/ProductModel';

export interface File {
  filepath: string
  originalFilename: string
  type: string
}

export interface FormHandleProps {
  fields: Omit<ProductModel, 'pinned' | 'imagePresentationUrl'>
  files?: File
}

export interface FormProps {
  fields: Omit<ProductModel, 'pinned' | 'imagePresentationUrl'>
  filepath: string
}

export interface FormHandleAdapter {
  handleData(req: NextApiRequest): Promise<FormHandleProps>
  handleForm(req: NextApiRequest): Promise<FormProps>
}
