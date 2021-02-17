import styled from 'styled-components';
import mixins from 'utils/mixins';

const Wrapper = styled.div`
  ${mixins.boxShadow};
  ${mixins.borderRadius};

  position: relative;
  overflow: hidden;

  padding: 1rem;
  background-color: var(--app-pallete-white);
`;

export default Wrapper;
