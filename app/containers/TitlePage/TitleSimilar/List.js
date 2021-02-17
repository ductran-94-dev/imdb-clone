import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: var(--app-gap-width) var(--app-gap-width);

  padding: 0;
  margin: 0;
`;

export default List;
