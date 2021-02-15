/**
 *
 * TitleStoryline
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';

function TitleStoryline({ titleDetails }) {
  return (
    <React.Fragment>
      <p>{titleDetails.overview}</p>
      <Box />
    </React.Fragment>
  );
}

TitleStoryline.propTypes = {
  titleDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default TitleStoryline;
