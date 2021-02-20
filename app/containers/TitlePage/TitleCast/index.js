/**
 *
 * TitleCast
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CastItem from 'components/CastItem';
import Grid from 'components/Grid';

import Wrapper from './Wrapper';

function TitleCast({ titleCast }) {
  if (titleCast) {
    return (
      <Wrapper>
        <Grid xs={1} sm={2} md={3}>
          {titleCast.map(item => (
            <CastItem key={`titleCast-${item.id}`} item={item} />
          ))}
        </Grid>
      </Wrapper>
    );
  }

  return null;
}

TitleCast.propTypes = {
  titleCast: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleCast;
