import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCartProductsArray, getCartTotalPrice } from '../../redux/selectors';
import { Header } from '../Header';
import { useViewportSize } from '../../hooks';
import { ProductInCart } from '../../components';
import styles from './CartStyles';

const Cart = ({ setView }) => {
  const productsInCart = useSelector(getCartProductsArray);
  const cartTotal = useSelector(getCartTotalPrice);
  const { isMobile } = useViewportSize();

  return (
    <div className={styles.pageContainer}>
      <Header
        title="Cart"
        icon={(isMobile && '<') || null}
        iconPosition="left"
        onClick={() => setView('products')}
      />
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
    </div>
  );
};

Cart.propTypes = { setView: PropTypes.func.isRequired };

export default Cart;
