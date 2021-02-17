import styled from 'styled-components';
import { Button as NormalButton } from 'react-bootstrap';

const Button = styled(NormalButton)`
  font-weight: 700;
  font-size: 1.2rem;
  border: none;
  color: var(--app-pallete-primary-text);

  sub {
    color: var(--link-hover-color);
  }
`;

export default Button;
