import { css } from '@emotion/css';

export default {
  productAddButton: css`
    cursor: pointer;
    border: none;
    background: transparent;
    line-height: 100%;
    font-size: 130%;
    color: #b30037;

    &[disabled] {
      opacity: 0.3;
      cursor: auto;
    }
  `,
  alreadyAddedSign: css`
    color: white;
    line-height: 100%;
    text-align: center;
    background-color: #b30037;
    vertical-align: middle;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    opacity: 0.6;
  `,
};
