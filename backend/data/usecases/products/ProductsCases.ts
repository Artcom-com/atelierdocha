import { ProductModel } from '../../model/ProductModel';

export interface ProductCases {
  add(infos: ProductModel): Promise<void>
  findById(id: string): Promise<ProductModel>
  findPinneds(): Promise<ProductModel[]>
}
