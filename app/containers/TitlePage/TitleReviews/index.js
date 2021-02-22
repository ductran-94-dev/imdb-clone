/**
 *
 * TitleReviews
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from 'components/ReviewItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Grid from 'components/Grid';

import Wrapper from './Wrapper';

function TitleReviews({ loading, error, items }) {
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
        <Grid xs={1} sm={2}>
          {items.map(item => (
            <ReviewItem key={`titleReview-${item.id}`} item={item} />
          ))}
        </Grid>
      </Wrapper>
    );
  }

  return null;
}

TitleReviews.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleReviews;
