export const ADD_PRODUCT_QUANTITY = 'ADD_PRODUCT_QUANTITY';
export const SUBTRACT_PRODUCT_QUANTITY = 'SUBTRACT_PRODUCT_QUANTITY';

export const addProductQuantity = (product) => ({
  type: ADD_PRODUCT_QUANTITY,
  product,
});

export const substractProductQuantity = (product) => ({
  type: SUBTRACT_PRODUCT_QUANTITY,
  product,
});
