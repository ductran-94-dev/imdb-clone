/**
 *
 * TitleCast
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CastItem from 'components/CastItem';
import Grid from 'components/Grid';
import LoadingIndicator from 'components/LoadingIndicator';

import Wrapper from './Wrapper';

function TitleCast({ loading, error, items }) {
  if (loading) {
    return (
      <Wrapper>
        <LoadingIndicator />
      </Wrapper>
    );
  }

  if (error !== false) {
    const ErrorComponent = () => <p>Something went wrong, please try again!</p>;

    return (
      <Wrapper>
        <ErrorComponent />
      </Wrapper>
    );
  }

  if (!!items && items !== false) {
    return (
      <Wrapper>
        <Grid xs={1} sm={2} md={3}>
          {items.map(item => (
            <CastItem key={`items-${item.id}`} item={item} />
          ))}
        </Grid>
      </Wrapper>
    );
  }

  return null;
}

TitleCast.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleCast;
