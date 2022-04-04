import ProductController from '../controllers/ProductController';
import FormidableAdapater from '../helpers/FormidableAdapter';
import CloudinaryAdapter from '../services/CloudinaryAdapter';

const makeProductController = (): ProductController => {
  const formHandle = new FormidableAdapater();
  const imageHandle = new CloudinaryAdapter();
  const controller = new ProductController(formHandle, imageHandle);
  return controller;
};

export default makeProductController;
