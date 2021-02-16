import styled from 'styled-components';
import mixins from 'utils/mixins';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;

  background-color: var(--app-light);
  overflow: hidden;
  ${mixins.borderRadius};
  ${mixins.boxShadow};
`;

export default Wrapper;
