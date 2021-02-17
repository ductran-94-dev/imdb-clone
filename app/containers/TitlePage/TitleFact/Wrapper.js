import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--app-gap-width);

  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    grid-template-columns: 70% 30%;
  }
`;

export default Wrapper;
