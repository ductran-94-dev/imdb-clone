import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';

import Wrapper from './Wrapper';
import LogoLink from './LogoLink';
import messages from './messages';

function Header() {
  return (
    <Wrapper variant="dark" expand="sm">
      <Container>
        <LogoLink href="/">
          <FormattedMessage {...messages.imdb} />
        </LogoLink>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Menu</Nav.Link>
          </Nav>
          <Form
            className="px-5"
            style={{
              flexGrow: 1,
              flexShrink: 1,
            }}
          >
            <FormControl
              type="text"
              placeholder="Search IMDb"
              className="border-0"
            />
          </Form>
          <Nav className="ml-auto">
            <Nav.Link to="/imdb_pro" as={NavLink}>
              IMDbPro
            </Nav.Link>
            <Nav.Link to="/watchlist" as={NavLink}>
              Watchlist
            </Nav.Link>
            <Nav.Link to="/sign_in" as={NavLink}>
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Wrapper>
  );
}

export default Header;
