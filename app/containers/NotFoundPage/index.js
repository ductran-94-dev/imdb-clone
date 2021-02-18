/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'react-bootstrap/Container';
import H1 from 'components/H1';
import messages from './messages';
import Wrapper from './Wrapper';

export default function NotFound() {
  return (
    <Container>
      <Wrapper>
        <H1 className="text-center">
          <FormattedMessage {...messages.header} />
        </H1>
      </Wrapper>
    </Container>
  );
}
