/* eslint-disable prefer-promise-reject-errors */
import { NextApiRequest } from 'next';
import formidable from 'formidable';
import { FormHandleAdapter, FormHandleProps, FormProps } from '../adapters/FormHandleAdapter';
import { ProductModel } from '../data/model/ProductModel';
import { isEmptyObject } from '../../src/utils/validations';

export interface FormidableData {
  fields: formidable.Fields
  files: formidable.Files
}

export default class FormidableAdapater implements FormHandleAdapter {
  async handleData(req: NextApiRequest): Promise<FormHandleProps> {
    const data = await new Promise<FormidableData>((resolve, reject) => {
      const form = new formidable.IncomingForm({ keepExtensions: true, multiples: true });

      // eslint-disable-next-line consistent-return
      form.parse(req, (err, fields, files) => {
        if (err) {
          return reject(`Formidable: ${err}`);
        }

        resolve({ fields, files });
      });
    });

    const { fields, files } = data;

    const res: FormHandleProps = {
      fields: fields as Omit<ProductModel, 'pinned' | 'imagePresentationUrl'>,
    };

    if (!isEmptyObject(files)) {
      if (!Array.isArray(files[Object.keys(files)[0]])) {
        const file = files[Object.keys(files)[0]] as formidable.File;
        res.files = {
          filepath: file.filepath,
          originalFilename: file.originalFilename as string,
          type: file.mimetype as string,
        };
      }
    }

    return res;
  }

  async handleForm(req: NextApiRequest): Promise<FormProps> {
    const { fields, files } = await this.handleData(req);

    return {
      fields: {
        name: fields.name,
        price: fields.price,
      },
      filepath: files?.filepath || '',
    };
  }
}
