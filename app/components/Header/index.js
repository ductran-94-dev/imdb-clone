import React from 'react';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Navbar, Nav, Container } from 'react-bootstrap';

import SearchBar from 'containers/SearchBar';
import Wrapper from './Wrapper';
import LogoLink from './LogoLink';
import NavLink from './NavLink';

function Header() {
  return (
    <Wrapper expand="md">
      <Container>
        <LogoLink href="/">
          <FontAwesomeIcon icon="question-circle" size="2x" />
        </LogoLink>
        <Navbar.Collapse>
          <SearchBar />
          <Nav className="ml-auto">
            <NavLink to="/plus" as={RouteNavLink}>
              <FontAwesomeIcon icon="plus" />
            </NavLink>
            <NavLink to="/bookmark" as={RouteNavLink}>
              <FontAwesomeIcon icon="bookmark" />
            </NavLink>
            <NavLink to="/bell" as={RouteNavLink}>
              <FontAwesomeIcon icon="bell" />
            </NavLink>
            <NavLink to="/faCaretDown" as={RouteNavLink}>
              <FontAwesomeIcon icon="caret-down" />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Wrapper>
  );
}

export default Header;
