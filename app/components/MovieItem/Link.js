import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export default Wrapper;
