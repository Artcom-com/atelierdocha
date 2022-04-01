import { ProductModel } from '../../model/ProductModel';

export interface AddProduct {
  add(infos: ProductModel): Promise<void>
}

export type ProductCases = AddProduct;
