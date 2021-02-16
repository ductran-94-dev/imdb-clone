/**
 *
 * MoviesList
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import CastItem from 'components/CastItem';
import PropTypes from 'prop-types';
import React from 'react';
import Ul from './Ul';
import Wrapper from './Wrapper';

function MoviesList({ loading, error, cast }) {
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

  if (!!cast && cast !== false) {
    return (
      <Wrapper>
        <Ul>
          {cast.map(item => (
            <CastItem key={`item-${item.id}`} item={item} />
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
  cast: PropTypes.any,
};

export default MoviesList;
