import { ProductModel } from '../../model/ProductModel';

export interface ProductCases {
  add(infos: Omit<ProductModel, 'pinned'>): Promise<void>
  findById(id: string): Promise<ProductModel>
  findPinneds(): Promise<ProductModel[]>
  update(id: string, infos: Partial<ProductModel>): Promise<void>
  delete(id: string): Promise<number>
  pagination(page: number): Promise<ProductModel[]>
}
