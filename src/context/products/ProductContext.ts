/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { createContext } from 'react';
import { ProductModel } from '../../../backend/data/model/ProductModel';

export interface ProductContextType {
  hasChanged: boolean
  pinnedList: string[]
  productList: ProductModel[]
  productsInCurrentPage: ProductModel[]
  findProductsByName: ProductModel[]
  handleAddProducts(products: ProductModel[]): void
  handleFindProductsByName(products: ProductModel[] | ProductModel): void
  handleClearFindByNameList(): void
  handleDeleteProduct(id: string): void
  handleAddProductsInCurrentPage(products: ProductModel[]): void
  handlePinProduct(id: string): void
}

export default createContext<ProductContextType>({
  hasChanged: false,
  pinnedList: [],
  productList: [],
  productsInCurrentPage: [],
  findProductsByName: [],
  handleAddProducts: (products: ProductModel[]) => console.log(''),
  handleFindProductsByName: (products: ProductModel[] | ProductModel) => console.log(''),
  handleClearFindByNameList: () => console.log(''),
  handleDeleteProduct: (id: string) => console.log(''),
  handleAddProductsInCurrentPage: (products: ProductModel[]) => console.log(''),
  handlePinProduct: (id: string) => console.log(''),
});
