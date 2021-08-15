import { css } from '@emotion/css';

export default {
  productWrapper: css`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px gray;
    overflow: hidden;
  `,
  productInfoWrapper: css`
    padding: 8px;
  `,
  productName: css`
    display: inline-block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: normal;
  `,
  productDescription: css`
    display: none;
  `,
  productImage: css`
    width: 100%;
    height: 160px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  `,
  productFavIcon: css`
    font-size: 150%;
    color: white;
    margin-right: 10px;
  `,
  productIsFav: css`
    color: red;
  `,
  productPrice: css`
    color: #0c6eb3;
    font-size: 105%;
  `,
  cartInfo: css`
    display: none;
  `,
};
