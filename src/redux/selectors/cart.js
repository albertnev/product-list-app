import { createSelector } from 'reselect';

export const getCartProducts = (state) => state.cart.products;
export const getCartProductsArray = createSelector(
  getCartProducts,
  (products) => Object.values(products)
);
