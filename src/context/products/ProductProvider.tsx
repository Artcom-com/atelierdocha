import React, { useMemo, useReducer } from 'react';
import { ProductModel } from '../../../backend/data/model/ProductModel';
import productReducer from './campaignReducer';
import ProductContext, { ProductContextType } from './ProductContext';

export interface ProductsProviderProps {
  children: JSX.Element | JSX.Element[]
}

export default function ProductProvider({ children }: ProductsProviderProps): JSX.Element {
  const [productsState, dispatchProductActions] = useReducer(productReducer, {
    hasChanged: false,
    pinnedList: [],
    productList: [],
    productsInCurrentPage: [],
    findProductsByName: [],
  });

  const handleAddProducts = (products: ProductModel[]) => {
    dispatchProductActions({
      type: 'ADD_PRODUCTS',
      productList: products,
    });
  };

  const handleAddProductsInCurrentPage = (products: ProductModel[]) => {
    dispatchProductActions({
      type: 'ADD_PRODUCTS_IN_CURRENT_PAGE',
      productsInCurrentPage: products,
    });
  };

  const handleDeleteProduct = (id: string) => {
    dispatchProductActions({
      type: 'DELETE_PRODUCT',
      productDeleteIndex: id,
    });
  };

  const handlePinProduct = (id: string) => {
    dispatchProductActions({
      type: 'HANDLE_PIN_PRODUCT',
      productPinId: id,
    });
  };

  const handleFindProductsByName = (products: ProductModel[] | ProductModel): void => {
    dispatchProductActions({
      type: 'FIND_BY_NAME',
      findProductsByName: products,
    });
  };

  const handleClearFindByNameList = (): void => {
    dispatchProductActions({
      type: 'CLEAR_FIND_BY_NAME_LIST',
      findProductsByName: [],
    });
  };

  const context: ProductContextType = useMemo(() => ({
    hasChanged: productsState.hasChanged,
    productList: productsState.productList,
    productsInCurrentPage: productsState.productsInCurrentPage,
    pinnedList: productsState.pinnedList,
    findProductsByName: productsState.findProductsByName,
    handleAddProducts,
    handleDeleteProduct,
    handleAddProductsInCurrentPage,
    handlePinProduct,
    handleFindProductsByName,
    handleClearFindByNameList,
  }), [productsState]);

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}
