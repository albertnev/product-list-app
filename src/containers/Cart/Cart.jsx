import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCartProductsArray, getCartTotalPrice } from '../../redux/selectors';
import { Header } from '../Header';
import { ProductInCart } from '../../components';
import styles from './CartStyles';

const Cart = ({ setView }) => {
  const productsInCart = useSelector(getCartProductsArray);
  const cartTotal = useSelector(getCartTotalPrice);

  return (
    <>
      <Header title="Cart" icon="📋" onClick={() => setView('products')} />
      <div className={styles.cartWrapper}>
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
      </div>
    </>
  );
};

Cart.propTypes = { setView: PropTypes.func.isRequired };

export default Cart;
