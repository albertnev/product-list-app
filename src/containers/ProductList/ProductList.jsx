import React from 'react';
import { ProductInList } from '../../components';
import useFetchProducts from '../../hooks/useFetchProducts';
import styles from './ProductListStyles';

const ProductList = () => {
  const [{ products, isLoading, hasError }] = useFetchProducts();

  return (
    <>
      {hasError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>IsLoading</div>
      ) : (
        <ul className={styles.productsListContainer}>
          {products.map((product) => (
            <li key={`product-${product.id}`}>
              <ProductInList product={product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
