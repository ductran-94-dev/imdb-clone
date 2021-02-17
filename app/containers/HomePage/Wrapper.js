import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: calc(var(--app-gap-width) * 2);

  padding-top: calc(var(--app-gap-width) * 2);
`;

export default Wrapper;
