import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '@emotion/css';
import styles from './AddToCartButtonStyles';

const AddToCartButton = ({
  alreadyAdded,
  onClick,
  text,
  disabled,
  className,
}) => (
  <>
    {alreadyAdded ? (
      <div className={cx(styles.alreadyAddedSign, className)}>
        <span>✓</span>
      </div>
    ) : (
      <button
        data-testid="add-to-cart-button"
        onClick={onClick}
        disabled={disabled}
        className={cx(styles.productAddButton, className)}
        type="button"
      >
        {text}
      </button>
    )}
  </>
);

AddToCartButton.propTypes = {
  className: PropTypes.string,
  alreadyAdded: PropTypes.bool,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

AddToCartButton.defaultProps = {
  text: '+',
  className: '',
  disabled: false,
  alreadyAdded: false,
};

export default AddToCartButton;
