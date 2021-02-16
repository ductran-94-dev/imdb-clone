/**
 *
 * TitleHero
 *
 */

import VideoItem from 'components/VideoItem';
import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from './Wrapper';

function TitleHero({ titleDetails, hidden }) {
  return (
    <Wrapper hidden={hidden}>
      <VideoItem item={titleDetails} />
    </Wrapper>
  );
}

TitleHero.propTypes = {
  titleDetails: PropTypes.object,
  hidden: PropTypes.bool,
};

export default TitleHero;
