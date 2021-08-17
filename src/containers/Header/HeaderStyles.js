import { css } from '@emotion/css';

export default {
  header: css`
    display: grid;
    background-color: white;
    grid-template-columns: 1fr repeat(3, auto) 1fr;
  `,
  title: css`
    font-size: 135%;
    text-align: center;
    grid-column-start: 2;
  `,
  icon: css`
    font-size: 120%;
    margin-left: auto;
  `,
};
