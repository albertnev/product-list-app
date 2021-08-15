import { createSelector } from 'reselect';

export const getCartProducts = (state) => state.cart.products;
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
