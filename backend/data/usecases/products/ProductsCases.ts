import { ProductModel } from '../../model/ProductModel';

export interface UpdateProduct extends ProductModel {
  deletedImg?: string
}

export interface ProductCases {
  add(infos: Omit<ProductModel, 'pinned'>): Promise<void>
  findById(id: string): Promise<ProductModel>
  findByName(name: string): Promise<ProductModel[]>
  findPinneds(): Promise<ProductModel[]>
  update(id: string, infos: Partial<ProductModel>): Promise<void>
  delete(id: string): Promise<number>
  pagination(page: number): Promise<ProductModel[]>
}
