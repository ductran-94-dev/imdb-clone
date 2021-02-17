import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import mixins from 'utils/mixins';

const Wrapper = styled(Navbar)`
  width: 100%;
  background-color: var(--app-pallete-white);

  ${mixins.boxShadow};
`;

export default Wrapper;
