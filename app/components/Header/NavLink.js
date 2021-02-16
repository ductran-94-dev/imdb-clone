import styled from 'styled-components';
import { NavLink as NormalNavLink } from 'react-bootstrap';

const NavLink = styled(NormalNavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin-left: 0.5rem;

  border-radius: 50%;
  font-size: 1.15rem;
  background-color: #e4e6eb;
`;

export default NavLink;
