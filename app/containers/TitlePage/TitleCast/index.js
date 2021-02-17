/**
 *
 * TitleCast
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CastItem from 'components/CastItem';
import Wrapper from './Wrapper';
import List from './List';

function TitleCast({ titleCast }) {
  if (titleCast) {
    return (
      <Wrapper>
        <List>
          {titleCast.map(item => (
            <CastItem key={`titleCast-${item.id}`} item={item} />
          ))}
        </List>
      </Wrapper>
    );
  }

  return null;
}

TitleCast.propTypes = {
  titleCast: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleCast;
