import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import styles from './ProductInListStyles';
import { AddToCartButton } from '../AddToCartButton';
import { updateProductQuantity } from '../../redux/actions';
import { getCartProductById } from '../../redux/selectors';
import updateProduct from '../../api/updateProduct';

const ProductInList = ({ product, simplifiedView, onAddToCart }) => {
  const preTestId = 'product-in-list';
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(parseInt(product.favorite, 10));

  const toggleFavorite = async () => {
    const updateResponse = await updateProduct({
      productId: product.id,
      changes: { favorite: isFavorite ? 0 : 1 },
    });
    const newProduct = await updateResponse.json();
    setIsFavorite(parseInt(newProduct.favorite, 10));
  };

  const addProductToCart = () => {
    if (onAddToCart === undefined) {
      dispatch(updateProductQuantity(product));
    } else {
      onAddToCart(product);
    }
  };
  const productAlreadyInCart = useSelector(
    (state) => !!getCartProductById(state, product.id)
  );

  return (
    <div className={styles.productWrapper}>
      <div
        data-testid={`${preTestId}-image`}
        className={styles.productImage}
        style={{ backgroundImage: `url("${product.image_url}")` }}
        title={product.productName}
      >
        <button
          type="button"
          data-testid={`${preTestId}-fav-icon`}
          className={cx({
            [styles.productFavIcon]: true,
            [styles.productIsFav]: isFavorite,
          })}
          onClick={toggleFavorite}
        >
          ♥
        </button>
      </div>
      <div className={styles.productInfoWrapper}>
        <div className={styles.productInfo}>
          <span className={styles.productName} title={product.productName}>
            {product.productName}
          </span>
          <span className={styles.productPrice}>€{product.price}</span>
          {!simplifiedView ? (
            <p
              className={styles.productDescription}
              title={product.productDescription}
            >
              {product.productDescription.length > 120
                ? `${product.productDescription.substr(0, 120)}...`
                : product.productDescription}
            </p>
          ) : (
            <AddToCartButton
              className={styles.addToCartButton}
              disabled={product.stock === 0}
              alreadyAdded={productAlreadyInCart}
              onClick={addProductToCart}
            />
          )}
        </div>
        {!simplifiedView && (
          <div
            className={styles.cartInfo}
            data-testid={`${preTestId}-cart-info`}
          >
            <span
              data-testid={`${preTestId}-stock-left`}
              className={styles.productStock}
            >{`${product.stock} left`}</span>
            <AddToCartButton
              className={styles.addToCartButton}
              text="Add +"
              disabled={product.stock === 0}
              alreadyAdded={productAlreadyInCart}
              onClick={addProductToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
};

ProductInList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    image_url: PropTypes.string,
    stock: PropTypes.number,
    productName: PropTypes.string,
    price: PropTypes.number,
    productDescription: PropTypes.string,
    favorite: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  simplifiedView: PropTypes.bool,
  onAddToCart: PropTypes.func,
};

ProductInList.defaultProps = {
  simplifiedView: false,
  onAddToCart: undefined,
};

export default ProductInList;
