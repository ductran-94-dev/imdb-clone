import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const Wrapper = styled(Navbar)`
  width: 100%;
  background-color: ${props =>
    props.variant === 'dark' ? '#000000' : '#ffffff'};
`;

export default Wrapper;
