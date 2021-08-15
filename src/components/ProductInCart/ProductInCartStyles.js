import { css } from '@emotion/css';

export default {
  productWrapper: css`
    display: flex;
    flex-wrap: wrap;
  `,
  productImage: css`
    width: 80px;
    height: 80px;
    background-position: center;
    background-size: cover;
  `,
  productInfo: css`
    display: flex;
    flex-wrap: wrap;
    padding-left: 16px;
    flex-grow: 1;
  `,
  productName: css`
    flex: 0 0 100%;
  `,
  productPrice: css`
    flex: 0 0 100%;
    text-align: right;
  `,
};
