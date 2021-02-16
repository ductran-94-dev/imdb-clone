/**
 *
 * MoviesList
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import MovieItem from 'components/MovieItem';
import PropTypes from 'prop-types';
import React from 'react';
import List from './List';
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
        <List>
          {movies.map(movie => (
            <MovieItem key={`item-${movie.id}`} movie={movie} />
          ))}
        </List>
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
