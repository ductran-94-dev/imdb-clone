/**
 *
 * MovieItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Link from './Link';

function MovieItem({ item, isNormal }) {
  const source = `https://www.themoviedb.org/t/p/w440_and_h660_face/${
    item.poster_path
  }`;

  return (
    <Wrapper>
      <Link to={`/title?id=${item.id}`}>
        <img src={source} alt={item.title} className="w-100" />
        {isNormal && (
          <h6 className="text-center py-3">{item.original_title}</h6>
        )}
      </Link>
    </Wrapper>
  );
}

MovieItem.propTypes = {
  item: PropTypes.object,
  isNormal: PropTypes.bool,
};

export default MovieItem;
