import { css } from '@emotion/css';

export default {
  cartWrapper: css`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 16px;
    flex-grow: 1;
    overflow: hidden;
  `,
  productListWrapper: css`
    flex-grow: 1;
    overflow-y: auto;
  `,
  productList: css`
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 24px;
    }
  `,
  cartTotalWrapper: css`
    padding: 32px 0;
  `,
  totalAmountTitle: css`
    display: inline-block;
    width: 70%;
    text-align: center;
    font-weight: bold;
  `,
  cartTotal: css`
    display: inline-block;
    width: 30%;
    text-align: right;
    font-size: 120%;
    color: #b30037;
  `,
  cartFooter: css`
    margin-top: auto;
  `,
  buttonWrapper: css`
    text-align: center;
    padding-top: 32px;
    border-top: 1px solid #e6e6e6;

    button {
      width: 100%;
      padding: 12px;
      border-radius: 4px;
      font-weight: bold;
      color: white;
      background-color: #b30037;
      border: 1px solid #b30037;
      box-shadow: 0 0 10px lightgray;

      &:hover,
      &:active {
        color: #b30037;
        background-color: white;
        cursor: pointer;
      }
    }
  `,
};
