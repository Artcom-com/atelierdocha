import { ProductModel } from '../../../backend/data/model/ProductModel';

export interface State {
  hasChanged: boolean
  productList: ProductModel[]
  productsInCurrentPage: ProductModel[]
}

export interface Actions {
  type: 'ADD_PRODUCTS' | 'DELETE_PRODUCT' | 'ADD_PRODUCTS_IN_CURRENT_PAGE'
  productList?: ProductModel[]
  productIndex?: string
  productsInCurrentPage?: ProductModel[]
}

const productReducer = (state: State, actions: Actions): State => {
  if (actions.type === 'ADD_PRODUCTS') {
    if (Array.isArray(actions.productList)) {
      return {
        hasChanged: !state.hasChanged,
        productList: [...state.productList, ...actions.productList],
        productsInCurrentPage: state.productsInCurrentPage,
      };
    }
    if (actions.productList !== undefined) {
      return {
        hasChanged: !state.hasChanged,
        productList: [...state.productList, actions.productList],
        productsInCurrentPage: state.productsInCurrentPage,
      };
    }
  }

  if (actions.type === 'DELETE_PRODUCT') {
    const indexList: string[] = state.productList.map((product) => {
      if (product.id !== undefined) {
        return product.id;
      }
      return '';
    });

    const currentPageIndexList: string[] = state.productsInCurrentPage.map((product) => {
      if (product.id !== undefined) {
        return product.id;
      }
      return '';
    });

    const productListIndex = indexList.indexOf(String(actions.productIndex));

    if (productListIndex > -1) {
      state.productList.splice(productListIndex, 1);
    }

    const productCurrentPageIndex = currentPageIndexList.indexOf(String(actions.productIndex));

    if (productCurrentPageIndex > -1) {
      state.productsInCurrentPage.splice(productListIndex, 1);
    }

    return {
      hasChanged: !state.hasChanged,
      productList: [...state.productList],
      productsInCurrentPage: [...state.productsInCurrentPage],
    };
  }

  if (actions.type === 'ADD_PRODUCTS_IN_CURRENT_PAGE') {
    if (actions.productsInCurrentPage !== undefined) {
      return {
        hasChanged: !state.hasChanged,
        productList: state.productList,
        productsInCurrentPage: [...actions.productsInCurrentPage],
      };
    }
  }

  return {
    hasChanged: false,
    productList: [],
    productsInCurrentPage: [],
  };
};

export default productReducer;
