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
