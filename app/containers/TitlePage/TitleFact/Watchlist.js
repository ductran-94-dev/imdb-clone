import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Watchlist = styled(Button)`
  text-align: left;
  background-color: var(--app-pallete-primary);
  border-color: var(--app-pallete-primary);

  &:hover,
  &:link,
  &:focus,
  &:active {
    background-color: var(--app-dark);
    border-color: var(--app-dark);
  }
`;

export default Watchlist;
