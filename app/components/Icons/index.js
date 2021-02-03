/**
 *
 * Icons
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import IconFacebook from './Facebook';
import IconInstagram from './Instagram';
import IconYouTube from './YouTube';
import IconIssue from './Issue';
import IconExternal from './External';
import IconTwitter from './Twitter';
import IconPlayStore from './PlayStore';

function Icons({ name }) {
  switch (name) {
    case 'Facebook':
      return <IconFacebook />;
    case 'Instagram':
      return <IconInstagram />;
    case 'YouTube':
      return <IconYouTube />;
    case 'Issue':
      return <IconIssue />;
    case 'External':
      return <IconExternal />;
    case 'Twitter':
      return <IconTwitter />;
    case 'PlayStore':
      return <IconPlayStore />;
    default:
      return <IconIssue />;
  }
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icons;
