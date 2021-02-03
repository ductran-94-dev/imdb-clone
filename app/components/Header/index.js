import React from 'react';
import { FormattedMessage } from 'react-intl';

import LogoLink from './LogoLink';
import Wrapper from './Wrapper';
import messages from './messages';

function Header() {
  return (
    <div>
      <Wrapper>
        <LogoLink href="/">
          <FormattedMessage {...messages.imdb} />
        </LogoLink>
      </Wrapper>
    </div>
  );
}

export default Header;
