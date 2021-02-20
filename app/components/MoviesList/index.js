/**
 *
 * MoviesList
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import MovieItem from 'components/MovieItem';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from './Grid';
import Wrapper from './Wrapper';

function MoviesList({ loading, error, movies }) {
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

  if (!!movies && movies !== false) {
    return (
      <Wrapper>
        <Grid xs={2} sm={3} md={4} lg={5} xl={6}>
          {movies.map(movie => (
            <MovieItem key={`movie-${movie.id}`} movie={movie} />
          ))}
        </Grid>
      </Wrapper>
    );
  }

  return null;
}

MoviesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  movies: PropTypes.any,
};

export default MoviesList;
