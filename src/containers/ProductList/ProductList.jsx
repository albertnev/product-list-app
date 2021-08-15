import React from 'react';
import { useSelector } from 'react-redux';
import { getProductsArray } from '../../redux/selectors';
import { ProductInList } from '../../components';
import styles from './ProductListStyles';

const ProductList = () => {
  const productsArray = useSelector(getProductsArray);

  return (
    <ul className={styles.productsListContainer}>
      {productsArray.map((product) => (
        <li key={`product-${product.id}`}>
          <ProductInList product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
