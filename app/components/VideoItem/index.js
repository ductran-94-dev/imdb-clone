/* eslint-disable jsx-a11y/iframe-has-title */
/**
 *
 * VideoItem
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import Metadata from './Metadata';
import Subtitle from './Subtitle';
import Title from './Title';
import Wrapper from './Wrapper';

function VideoItem({ item }) {
  if (!item) return null;

  return (
    <Wrapper>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${item.key}`}
          allowFullScreen
        />
      </div>
      <Metadata>
        <Title>{item.name}</Title>
        <Subtitle>{item.type}</Subtitle>
      </Metadata>
    </Wrapper>
  );
}

VideoItem.propTypes = {
  item: PropTypes.object,
};

export default VideoItem;
