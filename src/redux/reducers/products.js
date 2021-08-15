import { SET_PRODUCTS_PER_PAGE } from '../actions';

const initialState = {
  productsList: {},
  currentPage: 1,
  productsPerPage: 20,
  isLoading: false,
  hasError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
