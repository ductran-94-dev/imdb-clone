/**
 *
 * MovieItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wrapper from './Wrapper';
import Link from './Link';
import Title from './Title';
import Subtitle from './Subtitle';
import Img from './Img';
import Figure from './Figure';
import Metadata from './Metadata';

function MovieItem({ item, isPoster }) {
  const source = `https://www.themoviedb.org/t/p/w440_and_h660_face/${
    item.poster_path
  }`;

  return (
    <Wrapper>
      <Link to={`/title?id=${item.id}`}>
        <Figure>
          <Img src={source} alt={item.title} />
        </Figure>
        <Metadata hidden={isPoster}>
          <Subtitle>
            {`${item.vote_average} `}
            <FontAwesomeIcon icon="star" className="text-warning" />
          </Subtitle>
          <Title>{item.original_title}</Title>
        </Metadata>
      </Link>
    </Wrapper>
  );
}

MovieItem.propTypes = {
  item: PropTypes.object,
  isPoster: PropTypes.bool,
};

export default MovieItem;
