/**
 *
 * SocialList
 *
 */

import React from 'react';

import Icons from 'components/Icons';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function SocialList() {
  const socialList = [
    'Facebook',
    'Instagram',
    'PlayStore',
    'Twitter',
    'YouTube',
  ];

  return (
    <Wrapper>
      {socialList.map(item => (
        <SocialLink key={item} href="/">
          <Icons name={item} />
        </SocialLink>
      ))}
    </Wrapper>
  );
}

SocialList.propTypes = {};

export default SocialList;
