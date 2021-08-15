import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductList, Cart, Menu } from '..';
import { getCurrentPage, getProductsPerPage } from '../../redux/selectors';
import { fetchProducts } from '../../helpers';
import styles from './AppStyles';

function App() {
  const productsPerPage = useSelector(getProductsPerPage);
  const currentPage = useSelector(getCurrentPage);

  useEffect(() => {
    fetchProducts({ page: currentPage, productsPerPage });
  }, [currentPage, productsPerPage]);

  return (
    <div className={styles.appWrapper}>
      <Menu />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
