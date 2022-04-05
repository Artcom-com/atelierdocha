import { NextApiRequest } from 'next';
import { ProductModel } from '../data/model/ProductModel';
import { UpdateProduct } from '../data/usecases/products/ProductsCases';

export interface File {
  filepath: string
  originalFilename: string
  type: string
}

export interface FormHandleProps {
  fields: Omit<UpdateProduct, 'pinned' | 'imagePresentationUrl'>
  files?: File
}

export interface FormProps {
  fields: Omit<UpdateProduct, 'pinned' | 'imagePresentationUrl'>
  filepath: string
}

export interface FormHandleAdapter {
  handleData(req: NextApiRequest): Promise<FormHandleProps>
  handleForm(req: NextApiRequest): Promise<FormProps>
}
