/* eslint-disable no-param-reassign */
import { ProductModel } from '../../../backend/data/model/ProductModel';

export interface State {
  hasChanged: boolean
  pinnedList: string[]
  productList: ProductModel[]
  productsInCurrentPage: ProductModel[]
}

export interface Actions {
  type: 'ADD_PRODUCTS' | 'DELETE_PRODUCT' | 'ADD_PRODUCTS_IN_CURRENT_PAGE' | 'HANDLE_PIN_PRODUCT'
  productList?: ProductModel[]
  productDeleteIndex?: string
  productsInCurrentPage?: ProductModel[]
  productPinId?: string
}

const productReducer = (state: State, actions: Actions): State => {
  if (actions.type === 'ADD_PRODUCTS') {
    if (Array.isArray(actions.productList)) {
      return {
        hasChanged: state.hasChanged,
        productList: [...state.productList, ...actions.productList],
        productsInCurrentPage: state.productsInCurrentPage,
        pinnedList: state.pinnedList,
      };
    }
    if (actions.productList !== undefined) {
      return {
        hasChanged: state.hasChanged,
        productList: [...state.productList, actions.productList],
        productsInCurrentPage: state.productsInCurrentPage,
        pinnedList: state.pinnedList,
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

    const productListIndex = indexList.indexOf(String(actions.productDeleteIndex));

    if (productListIndex > -1) {
      state.productList.splice(productListIndex, 1);
    }

    // eslint-disable-next-line max-len
    const productCurrentPageIndex = currentPageIndexList.indexOf(String(actions.productDeleteIndex));

    if (productCurrentPageIndex > -1) {
      state.productsInCurrentPage.splice(productListIndex, 1);
    }

    return {
      hasChanged: state.hasChanged,
      productList: [...state.productList],
      productsInCurrentPage: [...state.productsInCurrentPage],
      pinnedList: state.pinnedList,
    };
  }

  if (actions.type === 'ADD_PRODUCTS_IN_CURRENT_PAGE') {
    if (actions.productsInCurrentPage !== undefined) {
      return {
        hasChanged: state.hasChanged,
        productList: state.productList,
        productsInCurrentPage: [...actions.productsInCurrentPage],
        pinnedList: state.pinnedList,
      };
    }
  }

  if (actions.type === 'HANDLE_PIN_PRODUCT') {
    if (actions.productPinId) {
      const productId = state.pinnedList.indexOf(actions.productPinId);

      if (productId > -1) {
        state.pinnedList.splice(productId, 1);
      } else {
        state.pinnedList.push(actions.productPinId);
      }

      return {
        hasChanged: !state.hasChanged,
        productList: [...state.productList],
        productsInCurrentPage: [...state.productsInCurrentPage],
        pinnedList: [...state.pinnedList],
      };
    }
  }

  return {
    hasChanged: false,
    productList: [],
    productsInCurrentPage: [],
    pinnedList: [],
  };
};

export default productReducer;
