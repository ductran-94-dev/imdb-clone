import styled from 'styled-components';
import { ListGroupItem as NormalListGroupItem } from 'react-bootstrap';

const ListGroupItem = styled(NormalListGroupItem)`
  background-color: transparent;
  color: var(--link-hover-color);
  border: 0;

  padding-left: 1.5rem;
  padding-right: 1.5rem;

  &:first-child,
  &:last-child {
    padding-left: 0;
    padding-right: 0;
  }

  h6 {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

export default ListGroupItem;
