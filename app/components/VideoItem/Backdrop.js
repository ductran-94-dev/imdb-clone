import styled from 'styled-components';

const Backdrop = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  padding: 1rem;

  background-color: transparent;
  color: var(--app-primary-light);
  transition: all 1s ease-in-out;

  h3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;

    font-size: 1.2rem;

    small {
      margin-top: 3px;
      margin-left: 5px;

      font-size: 1rem;
      color: var(--app-primary-light);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);

    h3 {
      color: var(--app-primary);
    }
  }
`;

export default Backdrop;
