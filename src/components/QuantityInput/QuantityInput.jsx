import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuantityInputStyles';

const QuantityInput = ({ onChange, defaultValue }) => {
  const changeNumber = (value) => {
    onChange(parseInt(value, 10));
  };

  return (
    <div className={styles.inputWrapper}>
      <button
        type="button"
        data-testid="quantity-input-subtract-button"
        onClick={() => changeNumber(defaultValue - 1)}
      >
        -
      </button>
      <input
        type="text"
        data-testid="quantity-input-value-control"
        value={defaultValue}
        onChange={(ev) => changeNumber(ev.target.value)}
      />
      <button
        type="button"
        data-testid="quantity-input-add-button"
        onClick={() => changeNumber(defaultValue + 1)}
      >
        +
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default QuantityInput;
