/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { createContext } from 'react';
import { ProductModel } from '../../../backend/data/model/ProductModel';

export interface ProductContextType {
  hasChanged: boolean
  pinnedList: string[]
  productList: ProductModel[]
  productsInCurrentPage: ProductModel[]
  handleAddProducts(products: ProductModel[]): void
  handleDeleteProduct(id: string): void
  handleAddProductsInCurrentPage(products: ProductModel[]): void
  handlePinProduct(id: string): void
}

export default createContext<ProductContextType>({
  hasChanged: false,
  pinnedList: [],
  productList: [],
  productsInCurrentPage: [],
  handleAddProducts: (products: ProductModel[]) => console.log(''),
  handleDeleteProduct: (id: string) => console.log(''),
  handleAddProductsInCurrentPage: (products: ProductModel[]) => console.log(''),
  handlePinProduct: (id: string) => console.log(''),
});
