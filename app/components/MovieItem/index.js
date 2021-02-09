/**
 *
 * MovieItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function MovieItem({ item }) {
  const source = `https://www.themoviedb.org/t/p/w220_and_h330_face/${
    item.poster_path
  }`;

  return (
    <Wrapper>
      <img src={source} alt={item.title} className="w-100 rounded" />
      <h6 className="text-center py-3">{item.original_title}</h6>
    </Wrapper>
  );
}

MovieItem.propTypes = {
  item: PropTypes.object,
};

export default MovieItem;
