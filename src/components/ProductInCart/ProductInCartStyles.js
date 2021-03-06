import { css } from '@emotion/css';

export default {
  productWrapper: css`
    display: flex;
    flex-wrap: nowrap;
  `,
  productImage: css`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    background-position: center;
    background-size: cover;
  `,
  productInfo: css`
    display: flex;
    flex-wrap: wrap;
    padding-left: 16px;
    flex-grow: 1;
    min-width: 0;
  `,
  productName: css`
    flex: 0 0 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  productPrice: css`
    flex: 0 0 100%;
    text-align: right;
    color: #0c6eb3;
  `,
};
