/**
 *
 * TitleCast
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CastItem from 'components/CastItem';
import Wrapper from './Wrapper';

function TitleCast({ titleCast }) {
  return (
    <Wrapper>
      {titleCast &&
        titleCast.map(item => (
          <CastItem key={`titleCast-${item.id}`} item={item} />
        ))}
    </Wrapper>
  );
}

TitleCast.propTypes = {
  titleCast: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleCast;
