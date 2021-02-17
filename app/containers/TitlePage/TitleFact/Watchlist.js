import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Watchlist = styled(Button)`
  text-align: left;
  background-color: var(--app-primary);
  border-color: var(--app-primary);

  &:hover,
  &:link,
  &:focus,
  &:active {
    background-color: var(--app-dark);
    border-color: var(--app-dark);
  }
`;

export default Watchlist;
