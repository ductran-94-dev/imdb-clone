import styled from 'styled-components';
import mixins from 'utils/mixins';

const Wrapper = styled.div`
  background-color: var(--app-light);
  padding: 0.5rem 0.5rem;

  ${mixins.borderRadius};
  ${mixins.boxShadow};
`;

export default Wrapper;
