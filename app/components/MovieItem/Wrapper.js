import styled from 'styled-components';
import mixins from 'utils/mixins';

const Wrapper = styled.div`
  overflow: hidden;
  background-color: var(--app-light);

  ${mixins.boxShadow};
  ${mixins.borderRadius};
`;

export default Wrapper;
