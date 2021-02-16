/**
 *
 * TitleHero
 *
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import MovieItem from 'components/MovieItem';
import VideoItem from 'components/VideoItem';

import Wrapper from './Wrapper';
import Box from './Box';

function TitleHero({ titleDetails, videoCount, photoCount }) {
  return (
    <Wrapper>
      <div>
        <MovieItem movie={titleDetails} />
      </div>
      <div>
        <VideoItem item={titleDetails} />
      </div>
      <div>
        <Box>
          <FontAwesomeIcon icon="images" size="2x" />
          <h6>{photoCount} PHOTOS</h6>
        </Box>
      </div>
      <div>
        <Box>
          <FontAwesomeIcon icon="play-circle" size="2x" />
          <h6>{videoCount} VIDEOS</h6>
        </Box>
      </div>
    </Wrapper>
  );
}

TitleHero.propTypes = {
  titleDetails: PropTypes.object,
  videoCount: PropTypes.number,
  photoCount: PropTypes.number,
};

export default TitleHero;
