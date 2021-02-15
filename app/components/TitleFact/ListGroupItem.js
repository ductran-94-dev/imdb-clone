import styled from 'styled-components';
import { ListGroupItem as NormalListGroupItem } from 'react-bootstrap';

const ListGroupItem = styled(NormalListGroupItem)`
  background-color: transparent;
  border-color: var(--border-color);

  padding-left: 0;
  padding-right: 0;

  strong {
    color: var(--link-hover-color);
  }

  a {
    color: #5799ef;
  }
`;

export default ListGroupItem;
