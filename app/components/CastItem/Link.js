import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 0.5rem;

  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export default Link;
