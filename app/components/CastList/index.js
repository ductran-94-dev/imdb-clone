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

function CastList({ loading, error, items }) {
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
        <Ul>
          {items.map(item => (
            <CastItem key={`item-${item.id}`} item={item} />
          ))}
        </Ul>
      </Wrapper>
    );
  }

  return null;
}

CastList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.any,
};

export default CastList;
