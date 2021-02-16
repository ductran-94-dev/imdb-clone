import styled from 'styled-components';
import mixins from 'utils/mixins';

const Wrapper = styled.div`
  ${mixins.boxShadow};
  ${mixins.borderRadius};

  position: relative;
  overflow: hidden;
  background-color: var(--app-light);
`;

export default Wrapper;
