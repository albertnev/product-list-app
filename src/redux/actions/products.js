/*
 * FETCHING PRODUCTS
 */
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

export const fetchProductsError = () => ({
  type: FETCH_PRODUCTS_ERROR,
});

/*
 * PRODUCTS LIST
 */
export const SET_PRODUCTS_PER_PAGE = 'SET_PRODUCTS_PER_PAGE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const setProductsPerPage = (productsPerPage) => ({
  type: SET_PRODUCTS_PER_PAGE,
  productsPerPage,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
