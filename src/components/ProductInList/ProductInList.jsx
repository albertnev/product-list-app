import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '@emotion/css';
import styles from './ProductInListStyles';

const ProductInList = ({ product, simplifiedView }) => {
  const preTestId = 'product-in-list';

  return (
    <div className={styles.productWrapper}>
      <div
        data-testid={`${preTestId}-image`}
        className={styles.productImage}
        style={{ backgroundImage: `url("${product.image_url}")` }}
        title={product.productName}
      >
        <span
          data-testid={`${preTestId}-fav-icon`}
          className={cx({
            [styles.productFavIcon]: true,
            [styles.productIsFav]: parseInt(product.favorite, 10),
          })}
        >
          ♥
        </span>
      </div>
      <div className={styles.productInfoWrapper}>
        <div>
          <span className={styles.productName}>{product.productName}</span>
          <span className={styles.productPrice}>€{product.price}</span>
          <p className={styles.productDescription}>
            {product.productDescription}
          </p>
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
            <button
              data-testid={`${preTestId}-add-to-cart-button`}
              className={styles.productAddButton}
              type="button"
            >
              Add +
            </button>
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
};

ProductInList.defaultProps = {
  simplifiedView: false,
};

export default ProductInList;
