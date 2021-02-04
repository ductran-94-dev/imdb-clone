/**
 *
 * PageSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';
import Heading from './Heading';
import Title from './Title';

function PageSection({ children, title, moreLink }) {
  return (
    <Wrapper>
      <Heading hidden={!title.length}>
        <Title
          {...(moreLink ? { as: Link, to: moreLink } : { href: moreLink })}
        >
          {title}
          {moreLink && <span>...</span>}
        </Title>
      </Heading>
      {children}
    </Wrapper>
  );
}

PageSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  moreLink: PropTypes.string,
};

export default PageSection;
