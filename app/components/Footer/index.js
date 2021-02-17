import React from 'react';
import { FormattedMessage } from 'react-intl';

import SocialList from 'components/SocialList';

import Wrapper from './Wrapper';
import Inner from './Inner';
import Copyright from './Copyright';
import FooterLinks from './FooterLinks';
import messages from './messages';

function Footer() {
  const getYear = () => new Date().getFullYear();

  return (
    <Wrapper>
      <Inner>
        <FooterLinks>
          <SocialList />
        </FooterLinks>
        <Copyright>
          <FormattedMessage
            {...messages.licenseMessage}
            values={{
              currentYear: getYear(),
            }}
          />
        </Copyright>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
