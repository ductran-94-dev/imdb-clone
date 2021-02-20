import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.sm}, minmax(0, 1fr));
  grid-gap: var(--app-gap-width);

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    grid-template-columns: repeat(${props => props.sm}, minmax(0, 1fr));
  }

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    grid-template-columns: repeat(${props => props.md}, minmax(0, 1fr));
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    grid-template-columns: repeat(${props => props.lg}, minmax(0, 1fr));
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    grid-template-columns: repeat(${props => props.xl}, minmax(0, 1fr));
  }
`;

export default Wrapper;
