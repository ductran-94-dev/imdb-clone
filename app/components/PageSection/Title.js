import styled from 'styled-components';

const Title = styled.a`
  position: relative;

  padding: 0;
  padding-left: 0.75rem;

  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    left: 0;

    height: 100%;
    width: 4px;

    background: var(--app-primary);
    border-radius: 4px;
  }

  span {
    margin-left: 0.75rem;
  }

  &:hover {
    color: var(--app-primary-text);
    text-decoration: none;

    span {
      color: var(--app-primary);
    }
  }
`;

export default Title;
