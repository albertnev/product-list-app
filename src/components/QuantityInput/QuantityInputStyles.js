import { css } from '@emotion/css';

export default {
  inputWrapper: css`
    border: 2px solid #80808040;
    border-radius: 4px;
    background-color: white;
    width: 70px;
    flex-grow: 0;
    display: flex;
    padding: 2px;
    justify-content: space-between;

    input,
    button {
      text-align: center;
      border: none;
      background: none;
      vertical-align: middle;
      max-width: 33%;
    }
  `,
};
