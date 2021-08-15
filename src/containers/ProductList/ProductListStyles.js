import { css } from '@emotion/css';

export default {
  productsListContainer: css`
    list-style-type: none;
    margin: 0;
    padding: 8px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    li {
      box-sizing: border-box;
      padding: 8px;
      width: 50%;
    }
  `,
};
