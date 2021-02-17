import styled from 'styled-components';
import { ListGroupItem as NormalListGroupItem } from 'react-bootstrap';

const ListGroupItem = styled(NormalListGroupItem)`
  background-color: transparent;
  border-color: var(--app-pallete-border-primary);

  padding-left: 0;
  padding-right: 0;

  strong {
    color: var(--app-pallete-primary-text);
  }

  a {
    color: var(--app-pallete-secondary-text);
  }
`;

export default ListGroupItem;
