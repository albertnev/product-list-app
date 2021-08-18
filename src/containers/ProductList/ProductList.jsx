import React from 'react';
import PropTypes from 'prop-types';
import { ProductInList, Loader } from '../../components';
import { ProductListOptions } from '../ProductListOptions';
import { Header } from '../Header';
import { useFetchProducts, useViewportSize } from '../../hooks';
import styles from './ProductListStyles';

const ProductList = ({ setView }) => {
  const [{ products, isLoading, hasError }] = useFetchProducts();
  const { isMobile } = useViewportSize();

  return (
    <div className={styles.pageContainer}>
      <Header
        title="Products"
        icon={(isMobile && '>') || null}
        iconPosition="right"
        onClick={() => setView('cart')}
      />
      <ProductListOptions />
      <section className={styles.contentWrapper}>
        {hasError && (
          <div className={styles.errorMessage}>
            Something went wrong.
            <br />
            Please, try to refresh the page.
          </div>
        )}
        {isLoading ? (
          <Loader />
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
    </div>
  );
};

ProductList.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default ProductList;
