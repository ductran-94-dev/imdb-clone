/**
 *
 * VideoItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wrapper from './Wrapper';
import Backdrop from './Backdrop';

function VideoItem({ item }) {
  if (!item) return null;

  const source = `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/${
    item.backdrop_path
  }`;

  return (
    <Wrapper>
      <img src={source} alt={item.title} className="w-100" />
      <Backdrop>
        <h3>
          <FontAwesomeIcon icon="play-circle" size="2x" />
          &nbsp; Trailers
          <small>2:01</small>
        </h3>
      </Backdrop>
    </Wrapper>
  );
}

VideoItem.propTypes = {
  item: PropTypes.object,
};

export default VideoItem;
