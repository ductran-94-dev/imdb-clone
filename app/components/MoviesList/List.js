import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: var(--app-gap-width);

  padding: 0;
  margin: 0;

  & > div {
    display: none;
  }

  & > div:nth-child(1),
  & > div:nth-child(2) {
    display: block;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    & > div:nth-child(3) {
      display: block;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));

    & > div:nth-child(4) {
      display: block;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));

    & > div:nth-child(5) {
      display: block;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));

    & > div:nth-child(6) {
      display: block;
    }
  }
`;

export default List;
