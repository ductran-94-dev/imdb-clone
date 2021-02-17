import styled from 'styled-components';
import { ListGroupItem as NormalListGroupItem } from 'react-bootstrap';

const ListGroupItem = styled(NormalListGroupItem)`
  background-color: transparent;
  border-color: var(--app-border-color);

  padding-left: 0;
  padding-right: 0;

  strong {
    color: var(--app-primary-text);
  }

  a {
    color: var(--app-secondary-text);
  }
`;

export default ListGroupItem;
