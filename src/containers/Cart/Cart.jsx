import React from 'react';
import { useSelector } from 'react-redux';
import { getCartProductsArray, getCartTotalPrice } from '../../redux/selectors';
import { ProductInCart } from '../../components';
import styles from './CartStyles';

const Cart = () => {
  const productsInCart = useSelector(getCartProductsArray);
  const cartTotal = useSelector(getCartTotalPrice);

  return (
    <>
      <ul className={styles.productListContainer}>
        {productsInCart.map((product) => (
          <li key={`cart-product-${product.id}`}>
            <ProductInCart product={product} />
          </li>
        ))}
      </ul>
      <div>
        <span>Total Amount:</span>
        <span>{cartTotal}</span>
      </div>
    </>
  );
};

Cart.propTypes = {};

export default Cart;
