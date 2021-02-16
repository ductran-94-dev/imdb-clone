/**
 *
 * CastItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { getProfilePath } from 'services/url';

import Wrapper from './Wrapper';
import Figure from './Figure';
import Img from './Img';
import Title from './Title';
import Subtitle from './Subtitle';
import Anchor from './Anchor';
import Metadata from './Metadata';

function CastItem({ item }) {
  const profilePath = getProfilePath(item.profile_path);

  return (
    <Wrapper>
      <Figure>
        <Img src={profilePath} alt={item.original_name} />
      </Figure>
      <Metadata>
        <Title>{item.name}</Title>
        <Subtitle>{item.known_for_department}</Subtitle>
      </Metadata>
      <Anchor to={`/cast?id=${item.id}`} />
    </Wrapper>
  );
}

CastItem.propTypes = {
  item: PropTypes.object,
};

export default CastItem;
