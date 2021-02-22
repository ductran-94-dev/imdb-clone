/**
 *
 * TitleVideos
 *
 */

import Grid from 'components/Grid';
import LoadingIndicator from 'components/LoadingIndicator';
import VideoItem from 'components/VideoItem';
import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from './Wrapper';

function TitleVideos({ loading, error, items }) {
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
        <Grid sm={2}>
          {items &&
            items.map(item => (
              <VideoItem key={`titleVideo-${item.id}`} item={item} />
            ))}
        </Grid>
      </Wrapper>
    );
  }

  return null;
}

TitleVideos.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleVideos;
