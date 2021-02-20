/**
 *
 * TitleVideos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from 'components/VideoItem';
import Grid from 'components/Grid';
import Wrapper from './Wrapper';

function TitleVideos({ titleVideos }) {
  return (
    <Wrapper>
      <Grid sm={2}>
        {titleVideos &&
          titleVideos.map(item => (
            <VideoItem key={`titleVideo-${item.id}`} item={item} />
          ))}
      </Grid>
    </Wrapper>
  );
}

TitleVideos.propTypes = {
  titleVideos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleVideos;
