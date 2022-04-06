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
    productList: [],
    productsInCurrentPage: [],
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
      productIndex: id,
    });
  };

  const context: ProductContextType = useMemo(() => ({
    hasChanged: productsState.hasChanged,
    productList: productsState.productList,
    productsInCurrentPage: productsState.productsInCurrentPage,
    handleAddProducts,
    handleDeleteProduct,
    handleAddProductsInCurrentPage,
  }), [productsState]);

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}
