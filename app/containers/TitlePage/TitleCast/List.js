import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: var(--app-gap-width);

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default List;
