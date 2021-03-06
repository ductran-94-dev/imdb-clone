import { css } from 'styled-components';

const mixins = {
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--app-pallete-shadow-primary);
  `,

  borderRadius: css`
    border-radius: 10px;
  `,

  resetButton: css`
    border: 0;
    border-radius: 0;
  `,

  transdrop: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
