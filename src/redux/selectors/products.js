import { createSelector } from 'reselect';

export const getProducts = (state) => state.products.productsList;
export const getProductsArray = createSelector(getProducts, (products) =>
  Object.values(products)
);
export const getCurrentPage = (state) => state.products.currentPage;
export const getProductsPerPage = (state) => state.products.productsPerPage;
