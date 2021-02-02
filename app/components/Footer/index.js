import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import InnerContainer from './InnerContainer';
import SocialList from './SocialList';
import SocialItem from './SocialItem';
import List from './List';
import ListItem from './ListItem';
import Copyright from './Copyright';
import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import messages from './messages';

function Footer() {
  const getYear = () => new Date().getFullYear();

  return (
    <Wrapper>
      <InnerContainer>
        <FooterLinks>
          <SocialList>
            <SocialItem>
              <A href="/">Facebook</A>
            </SocialItem>
            <SocialItem>
              <A href="/">Instagram</A>
            </SocialItem>
            <SocialItem>
              <A href="/">Anonymous</A>
            </SocialItem>
            <SocialItem>
              <A href="/">Twitter</A>
            </SocialItem>
            <SocialItem>
              <A href="/">Youtube</A>
            </SocialItem>
          </SocialList>
          <List>
            <ListItem>
              <A href=".">Get the IMDb App</A>
            </ListItem>
            <ListItem>
              <A href=".">Help</A>
            </ListItem>
            <ListItem>
              <A href=".">Site Index</A>
            </ListItem>
            <ListItem>
              <A href=".">IMDbPro</A>
            </ListItem>
            <ListItem>
              <A href=".">Box Office Mojo</A>
            </ListItem>
            <ListItem>
              <A href=".">IMDb Developer</A>
            </ListItem>
            <ListItem>
              <A href=".">Press Room</A>
            </ListItem>
            <ListItem>
              <A href=".">Advertising</A>
            </ListItem>
            <ListItem>
              <A href=".">Jobs</A>
            </ListItem>
            <ListItem>
              <A href=".">Conditions of Use</A>
            </ListItem>
            <ListItem>
              <A href=".">Privacy Policy</A>
            </ListItem>
            <ListItem>
              <A href=".">Interest-Based Ads</A>
            </ListItem>
          </List>
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
      </InnerContainer>
    </Wrapper>
  );
}

export default Footer;
