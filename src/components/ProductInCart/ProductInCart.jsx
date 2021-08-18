import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { QuantityInput } from '..';
import { updateProductQuantity } from '../../redux/actions';
import styles from './ProductInCartStyles';

const ProductInCart = ({ product }) => {
  const dispatch = useDispatch();
  const updateProductInCart = (cartQuantity) => {
    dispatch(updateProductQuantity({ ...product, cartQuantity }));
  };

  return (
    <div className={styles.productWrapper}>
      <div
        className={styles.productImage}
        style={{ backgroundImage: `url("${product.image_url}")` }}
        title={product.productName}
      />
      <div className={styles.productInfo}>
        <span className={styles.productName} title={product.productName}>
          {product.productName}
        </span>
        <span className={styles.productPrice}>€{product.price}</span>
        <QuantityInput
          defaultValue={product.cartQuantity}
          onChange={updateProductInCart}
        />
      </div>
    </div>
  );
};

ProductInCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    image_url: PropTypes.string,
    stock: PropTypes.number,
    productName: PropTypes.string,
    price: PropTypes.number,
    cartQuantity: PropTypes.number,
  }).isRequired,
};

export default ProductInCart;
