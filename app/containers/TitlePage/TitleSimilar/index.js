/**
 *
 * TitleSimilar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';
import MovieItem from 'components/MovieItem';
import Grid from 'components/Grid';

import Wrapper from './Wrapper';

function TitleSimilar({ loading, error, items }) {
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
        <Grid xs={2} sm={3} md={4} lg={3} xl={4}>
          {items.map(movie => (
            <MovieItem key={`items-${movie.id}`} movie={movie} />
          ))}
        </Grid>
      </Wrapper>
    );
  }

  return null;
}

TitleSimilar.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleSimilar;
