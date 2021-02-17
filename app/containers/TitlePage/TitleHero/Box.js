import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--app-primary-dark);
  color: var(--app-primary-light);
  border-radius: 10px;
  cursor: pointer;
  transition: all 1s ease-in-out;

  h6 {
    margin-top: 0.5rem;

    font-weight: 700;
    font-size: 0.85rem;
  }

  &:hover {
    background-color: var(--app-primary-darker);
  }
`;

export default Box;
