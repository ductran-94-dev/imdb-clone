/**
 *
 * CastItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Figure from './Figure';
import Img from './Img';
import Title from './Title';
import Subtitle from './Subtitle';
import Link from './Link';
import Body from './Body';

function CastItem({ item, isPoster }) {
  return (
    <Wrapper>
      <Link to="/">
        <Figure>
          {item.profile_path ? (
            <Img
              src={`https://www.themoviedb.org/t/p/w276_and_h350_face${
                item.profile_path
              }`}
              alt={item.original_name}
            />
          ) : null}
        </Figure>
        <Body hidden={isPoster}>
          <Title>{item.name}</Title>
          <Subtitle>{item.name}</Subtitle>
        </Body>
      </Link>
    </Wrapper>
  );
}

CastItem.propTypes = {
  item: PropTypes.object,
  isPoster: PropTypes.bool,
};

export default CastItem;
