/**
 *
 * PageGroup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Title from './Title';

function PageGroup({ children, title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

PageGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageGroup;
