import { UPDATE_PRODUCT_QUANTITY } from '../actions';

const initialState = {
  products: {
    '41fd4fd9-95c7-4809-96db-a147d352fdbb': {
      id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
      image_url:
        'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
      price: 43,
      productName: 'Unbranded Metal Chair',
      stock: 8,
      cartQuantity: 2,
    },
  },
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
