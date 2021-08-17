import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsPerPage } from '../../redux/actions';
import { getProductsPerPage } from '../../redux/selectors';
import styles from './ProductListOptionsStyles';

const ProductListOptions = () => {
  const dispatch = useDispatch();
  const productsPerPage = useSelector(getProductsPerPage);
  const availableLimits = [10, 20, 30, 50, 100];

  return (
    <div className={styles.optionsContainer}>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        defaultValue={productsPerPage}
        onChange={(ev) => {
          dispatch(setProductsPerPage(ev.target.value));
        }}
      >
        {availableLimits.map((opt) => (
          <option key={`option-${opt}`} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductListOptions;
