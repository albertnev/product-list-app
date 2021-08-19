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
  productDescription: css`
    height: 60px;
    margin-bottom: 32px;
  `,
  productInfo: css`
    display: flex;
    flex-wrap: wrap;
  `,
  productName: css`
    display: inline-block;
    flex: 0 0 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: normal;
    margin-bottom: 8px;

    @media (min-width: 520px) {
      flex: 0 0 70%;
      font-size: 110%;
    }
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

    @media (min-width: 520px) {
      height: 120px;
    }
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

    @media (min-width: 520px) {
      flex: 0 0 30%;
      text-align: right;
    }
  `,
  addToCartButton: css`
    margin-left: auto;

    @media (min-width: 520px) {
      background-color: #b30037;
      font-size: 100%;
      border-radius: 4px;
      padding: 5px 10px;
      border: none;
      color: white;
    }
  `,
  productStock: css`
    font-style: italic;
  `,
  cartInfo: css`
    display: flex;
    align-items: center;
  `,
};
