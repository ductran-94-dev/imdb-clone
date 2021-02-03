/**
 *
 * SocialList
 *
 */

import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function SocialList() {
  const socialList = [
    'Facebook',
    'Instagram',
    'Anonymous',
    'Twitter',
    'Youtube',
  ];

  return (
    <Wrapper>
      {socialList.map(item => (
        <SocialLink key={item} href="/">
          {item}
        </SocialLink>
      ))}
    </Wrapper>
  );
}

SocialList.propTypes = {};

export default SocialList;
