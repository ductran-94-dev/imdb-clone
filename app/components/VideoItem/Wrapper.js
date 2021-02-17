import styled from 'styled-components';
import mixins from 'utils/mixins';

const Wrapper = styled.div`
  ${mixins.boxShadow};
  ${mixins.borderRadius};

  padding: 1rem;
  background-color: var(--app-pallete-white);

  iframe {
    width: 100%;
  }
`;

export default Wrapper;
