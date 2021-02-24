import styled from 'styled-components';

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 0rem 0;
  grid-gap: var(--app-gap-width);
  margin: 0;
`;

export default Ul;
