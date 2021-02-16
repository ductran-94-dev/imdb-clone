import styled from 'styled-components';
import mixins from 'utils/mixins';

const Wrapper = styled.div`
  ${mixins.borderRadius};
  ${mixins.boxShadow};

  position: relative;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 0.75rem;

  padding: 0.75rem;
  background-color: var(--app-light);
`;

export default Wrapper;
