import React from 'react';
import { FormattedMessage } from 'react-intl';

import SocialList from 'components/SocialList';

import Wrapper from './Wrapper';
import Inner from './Inner';
import FooterNav from './FooterNav';
import FooterItem from './FooterItem';
import FooterLink from './FooterLink';
import Copyright from './Copyright';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import messages from './messages';

function Footer() {
  const getYear = () => new Date().getFullYear();
  const navMessages = [
    messages.getTheImdbApp,
    messages.help,
    messages.siteIndex,
    messages.imdbPro,
    messages.boxOfficeMojo,
    messages.imdbDeveloper,
    messages.pressRoom,
    messages.advertising,
    messages.jobs,
    messages.conditionsOfUse,
    messages.privacyPolicy,
    messages.interestBasedAds,
  ];

  return (
    <Wrapper>
      <Inner>
        <FooterLinks>
          <SocialList />
          <FooterNav>
            {navMessages.map(message => (
              <FooterItem key={message.id}>
                <FooterLink href=".">
                  <FormattedMessage {...message} />
                </FooterLink>
              </FooterItem>
            ))}
          </FooterNav>
        </FooterLinks>
        <FooterLogo>an amazon company</FooterLogo>
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
