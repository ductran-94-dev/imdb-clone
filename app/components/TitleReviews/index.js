/**
 *
 * TitleReviews
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from 'components/ReviewItem';
import LoadingIndicator from 'components/LoadingIndicator';

import List from './List';
import Wrapper from './Wrapper';

function TitleReviews({ loading, error, titleReviews }) {
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

  if (!!titleReviews && titleReviews !== false) {
    return (
      <Wrapper>
        <List>
          {titleReviews.map(item => (
            <ReviewItem key={`titleReview-${item.id}`} item={item} />
          ))}
        </List>
      </Wrapper>
    );
  }

  return null;
}

TitleReviews.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  titleReviews: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleReviews;
