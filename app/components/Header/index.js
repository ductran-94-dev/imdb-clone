import React from 'react';
import { FormattedMessage } from 'react-intl';

import LogoLink from './LogoLink';
import Wrapper from './Wrapper';
import messages from './messages';

function Header() {
  return (
    <Wrapper>
      <LogoLink href="/">
        <FormattedMessage {...messages.imdb} />
      </LogoLink>
    </Wrapper>
  );
}

export default Header;
