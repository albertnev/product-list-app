import { css } from '@emotion/css';

export default {
  pageContainer: css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;

    @media (min-width: 520px) {
      flex: 1 1 70%;
    }
  `,
  contentWrapper: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  productListWrapper: css`
    overflow-y: auto;
  `,
  errorMessage: css`
    line-height: 1.5;
    background-color: #ff00004f;
    text-align: center;
    padding: 10px;
    border: 1px solid #d68484;
  `,
  productsListContainer: css`
    list-style-type: none;
    margin: 0;
    padding: 8px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    overflow-y: auto;

    li {
      box-sizing: border-box;
      padding: 8px;
      width: 50%;

      @media (min-width: 520px) {
        padding: 16px;
        flex: 1 1 280px;
      }
    }
  `,
};
