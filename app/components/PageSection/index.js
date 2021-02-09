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

function PageSection({ children, title, seeAllLink }) {
  return (
    <Wrapper>
      <Heading hidden={!title.length}>
        <Title
          {...(seeAllLink
            ? { as: Link, to: seeAllLink }
            : { href: seeAllLink })}
        >
          {title}
          {seeAllLink && <span>...</span>}{' '}
        </Title>
      </Heading>
      {children}{' '}
    </Wrapper>
  );
}

PageSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  seeAllLink: PropTypes.string,
};

export default PageSection;
