import { createSelector } from 'reselect';

export const getCartProducts = (state) => state.cart.products;
export const getCartProductById = (state, id) => state.cart.products[id];
export const getCartProductsArray = createSelector(
  getCartProducts,
  (products) => Object.values(products)
);
export const getCartTotalPrice = createSelector(
  getCartProductsArray,
  (products) =>
    products.reduce(
      (accumulator, product) =>
        accumulator + product.price * product.cartQuantity,
      0
    )
);
