import { css } from '@emotion/css';

export default {
  contentWrapper: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  productListWrapper: css`
    overflow-y: auto;
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
    }
  `,
};
