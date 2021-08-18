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
      <section className={styles.cartWrapper}>
        <div className={styles.productListWrapper}>
          <ul className={styles.productList}>
            {productsInCart.map((product) => (
              <li key={`cart-product-${product.id}`}>
                <ProductInCart product={product} />
              </li>
            ))}
          </ul>
        </div>
        <footer className={styles.cartFooter}>
          <div className={styles.cartTotalWrapper}>
            <span className={styles.totalAmountTitle}>Total Amount:</span>
            <span className={styles.cartTotal}>€{cartTotal.toFixed(2)}</span>
          </div>
          <div className={styles.buttonWrapper}>
            <button type="button">Make a payment</button>
          </div>
        </footer>
      </section>
    </>
  );
};

Cart.propTypes = { setView: PropTypes.func.isRequired };

export default Cart;
