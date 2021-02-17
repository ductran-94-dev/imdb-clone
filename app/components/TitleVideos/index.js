/**
 *
 * TitleVideos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from 'components/VideoItem';
import Wrapper from './Wrapper';
import List from './List';

function TitleVideos({ titleVideos }) {
  return (
    <Wrapper>
      <List>
        {titleVideos &&
          titleVideos.map(item => (
            <VideoItem key={`titleVideo-${item.id}`} item={item} />
          ))}
      </List>
    </Wrapper>
  );
}

TitleVideos.propTypes = {
  titleVideos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleVideos;
