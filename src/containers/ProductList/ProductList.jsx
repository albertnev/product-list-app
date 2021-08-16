import React from 'react';
import { ProductInList } from '../../components';
import { useFetchProducts, useViewportSize } from '../../hooks';
import styles from './ProductListStyles';

const ProductList = () => {
  const [{ products, isLoading, hasError }] = useFetchProducts();
  const { isMobile } = useViewportSize();

  return (
    <>
      {hasError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>IsLoading</div>
      ) : (
        <ul className={styles.productsListContainer}>
          {products.map((product) => (
            <li key={`product-${product.id}`}>
              <ProductInList product={product} simplifiedView={isMobile} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
