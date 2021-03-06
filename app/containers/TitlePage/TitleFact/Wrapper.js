import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: var(--app-gap-width);

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    grid-template-columns: 70% 30%;
  }
`;

export default Wrapper;
