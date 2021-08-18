import React from 'react';
import PropTypes from 'prop-types';
import { ProductInList } from '../../components';
import { ProductListOptions } from '../ProductListOptions';
import { Header } from '../Header';
import { useFetchProducts, useViewportSize } from '../../hooks';
import styles from './ProductListStyles';

const ProductList = ({ setView }) => {
  const [{ products, isLoading, hasError }] = useFetchProducts();
  const { isMobile } = useViewportSize();

  return (
    <>
      <Header title="Products" icon="🛒" onClick={() => setView('cart')} />
      <ProductListOptions />
      <section className={styles.contentWrapper}>
        {hasError && <div>Something went wrong...</div>}
        {isLoading ? (
          <div>IsLoading</div>
        ) : (
          <div className={styles.productListWrapper}>
            <ul className={styles.productsListContainer}>
              {products.map((product) => (
                <li key={`product-${product.id}`}>
                  <ProductInList product={product} simplifiedView={isMobile} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

ProductList.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default ProductList;
