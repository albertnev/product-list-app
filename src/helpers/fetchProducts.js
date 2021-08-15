import fetchProductsList from '../fetchers/fetchProductsList';
import store from '../redux/store';
import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from '../redux/actions';

export default async ({ page, productsPerPage } = {}) => {
  const { dispatch } = store;

  dispatch(fetchProducts());
  fetchProductsList({ page, productsPerPage })
    .then((response) => response.json())
    .then((products) => {
      dispatch(fetchProductsSuccess(products));
    })
    .catch(() => dispatch(fetchProductsError()));
};
