/**
 *
 * PageSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wrapper from './Wrapper';
import Heading from './Heading';
import Title from './Title';
import Subtitle from './Subtitle';

function PageSection({ children, title, subtitle, seeAllLink }) {
  return (
    <Wrapper>
      <Heading hidden={!title}>
        <Title
          {...(seeAllLink
            ? { as: Link, to: seeAllLink }
            : { href: seeAllLink })}
        >
          {title}
          {seeAllLink && (
            <span>
              <FontAwesomeIcon icon="chevron-right" />
            </span>
          )}
        </Title>
        <Subtitle hidden={!subtitle}>{subtitle}</Subtitle>
      </Heading>
      {children}
    </Wrapper>
  );
}

PageSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.element,
  seeAllLink: PropTypes.string,
};

export default PageSection;
