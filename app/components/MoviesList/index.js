/**
 *
 * MoviesList
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import MovieItem from 'components/MovieItem';
import PropTypes from 'prop-types';
import React from 'react';
import Ul from './Ul';
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
        <Ul>
          {movies.map(movie => (
            <MovieItem key={`item-${movie.id}`} item={movie} />
          ))}
        </Ul>
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
