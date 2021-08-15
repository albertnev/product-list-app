import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  SET_PRODUCTS_PER_PAGE,
} from '../actions';

const initialState = {
  productsList: {},
  currentPage: 1,
  productsPerPage: 20,
  isLoading: false,
  hasError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productsList: {
          ...action.products,
        },
        isLoading: false,
        hasError: false,
      };
    }

    case FETCH_PRODUCTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }

    case SET_PRODUCTS_PER_PAGE: {
      return {
        ...state,
        productsPerPage: action.productsPerPage,
      };
    }

    default:
      return state;
  }
};
