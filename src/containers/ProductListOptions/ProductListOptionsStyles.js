import { css } from '@emotion/css';

export default {
  quantitySelector: css`
    padding: 5px;
    border: none;
    margin-right: auto;
    background-color: white;
    border-radius: 2px;
  `,
  pageNavigation: css`
    margin-left: 32px;
    color: white;

    button {
      color: #b30037;
      background-color: white;
      border: none;
      border-radius: 2px;
      font-weight: bold;
    }

    span {
      margin: 0 16px;
    }
  `,
  optionsContainer: css`
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    width: 100%;
    background-color: #b30037;
    padding: 16px;
    font-weight: bold;
    align-items: center;
  `,
};
