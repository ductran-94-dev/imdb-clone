import styled from 'styled-components';
import { Button as NormalButton } from 'react-bootstrap';
import mixins from 'utils/mixins';

const Watchlist = styled(NormalButton)`
  ${mixins.resetButton};

  position: absolute;
  top: 0px;
  left: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-top: 4px solid rgba(0, 0, 0, 0.9);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  color: var(--app-light);
  background-color: rgba(0, 0, 0, 0.65);
  font-size: 2rem;
`;

export default Watchlist;
