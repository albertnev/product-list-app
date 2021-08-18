import { UPDATE_PRODUCT_QUANTITY } from '../actions';

const initialState = {
  products: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_QUANTITY: {
      const { product } = action;

      // Delete the product if the quantity is 0
      if (product.cartQuantity === 0) {
        const { [product.id]: removedProduct, ...updatedProducts } =
          state.products;

        return {
          ...state,
          products: { ...updatedProducts },
        };
      }

      // Otherwise, if the quantity is not defined it's a new product, or update the quantity accordingly
      return {
        ...state,
        products: {
          ...state.products,
          [product.id]: {
            ...product,
            cartQuantity: product.cartQuantity ? product.cartQuantity : 1,
          },
        },
      };
    }

    default:
      return state;
  }
};
