import { css } from 'styled-components';

const mixins = {
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--app-primary-shadow);
  `,

  borderRadius: css`
    border-radius: 10px;
  `,

  resetButton: css`
    border: 0;
    border-radius: 0;
  `,

  textTruncate: css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: var(--green);
      outline: 0;
    }
  `,
};

export default mixins;
