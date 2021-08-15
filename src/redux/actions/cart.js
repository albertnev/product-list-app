export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';

export const updateProductQuantity = (product) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  product,
});
