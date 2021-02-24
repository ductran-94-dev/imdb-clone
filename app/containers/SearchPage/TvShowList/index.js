/**
 *
 * TvShowList
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import TvShowItem from 'components/TvShowItem';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from './Grid';
import Wrapper from './Wrapper';

function TvShowList({ loading, error, items }) {
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
        <Grid xs={2} sm={3} md={4} lg={5} xl={6}>
          {items.map(item => (
            <TvShowItem key={`item-${item.id}`} item={item} />
          ))}
        </Grid>
      </Wrapper>
    );
  }

  return null;
}

TvShowList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.any,
};

export default TvShowList;
