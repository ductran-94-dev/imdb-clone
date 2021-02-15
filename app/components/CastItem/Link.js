import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  text-decoration: none;

  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  &:hover {
    text-decoration: none;
  }
`;

export default Link;
