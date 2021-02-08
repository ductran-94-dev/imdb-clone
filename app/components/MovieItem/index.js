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
      <h6 className="text-center font-weight-bold">{item.original_title}</h6>
      <p className="text-center">Vote {item.vote_count}</p>
    </Wrapper>
  );
}

MovieItem.propTypes = {
  item: PropTypes.object,
};

export default MovieItem;
