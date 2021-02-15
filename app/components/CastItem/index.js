/**
 *
 * CastItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Img from './Img';
import Title from './Title';
import Subtitle from './Subtitle';
import Link from './Link';

function CastItem({ item }) {
  return (
    <Wrapper>
      <Link to="/">
        <Img
          src={`https://www.themoviedb.org/t/p/w276_and_h350_face${
            item.profile_path
          }`}
          alt={item.original_name}
        />
        <div>
          <Title>{item.name}</Title>
          <Subtitle>{item.name}</Subtitle>
        </div>
      </Link>
    </Wrapper>
  );
}

CastItem.propTypes = {
  item: PropTypes.object,
};

export default CastItem;
