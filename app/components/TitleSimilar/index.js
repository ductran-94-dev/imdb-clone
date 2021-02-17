/**
 *
 * TitleSimilar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';
import MovieItem from 'components/MovieItem';
import List from './List';
import Wrapper from './Wrapper';

function TitleSimilar({ loading, error, titleSimilar }) {
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

  if (!!titleSimilar && titleSimilar !== false) {
    return (
      <Wrapper>
        <List>
          {titleSimilar.map(movie => (
            <MovieItem key={`item-${movie.id}`} movie={movie} />
          ))}
        </List>
      </Wrapper>
    );
  }

  return null;
}

TitleSimilar.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  titleSimilar: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleSimilar;
