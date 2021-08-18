import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsPerPage, setCurrentPage } from '../../redux/actions';
import { getProductsPerPage, getCurrentPage } from '../../redux/selectors';
import styles from './ProductListOptionsStyles';

const ProductListOptions = () => {
  const dispatch = useDispatch();
  const productsPerPage = useSelector(getProductsPerPage);
  const currentPage = useSelector(getCurrentPage);
  const availableLimits = [10, 20, 30, 50, 100];
  const setPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className={styles.optionsContainer}>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        className={styles.quantitySelector}
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
      <div className={styles.pageNavigation}>
        <button type="button" onClick={() => setPage(currentPage - 1)}>
          {'<'}
        </button>
        <span>{currentPage}</span>
        <button type="button" onClick={() => setPage(currentPage + 1)}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default ProductListOptions;
