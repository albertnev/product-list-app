import { SET_PRODUCTS_PER_PAGE, SET_CURRENT_PAGE } from '../actions';

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

    case SET_CURRENT_PAGE: {
      let nextPage = parseInt(action.page, 10);
      if (nextPage < 1) nextPage = 1;

      return {
        ...state,
        currentPage: nextPage,
      };
    }

    default:
      return state;
  }
};
