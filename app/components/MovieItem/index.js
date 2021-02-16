/**
 *
 * MovieItem
 *
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { getPoster } from 'services/url';

import AddToWatchlist from 'containers/AddToWatchlist';

import Figure from './Figure';
import Img from './Img';
import Metadata from './Metadata';
import Subtitle from './Subtitle';
import Title from './Title';
import Wrapper from './Wrapper';
import Watchlist from './Watchlist';
import Anchor from './Anchor';

function MovieItem({ movie }) {
  const posterPath = getPoster(movie.poster_path);

  return (
    <Wrapper>
      <Figure>
        <Img src={posterPath} alt={movie.title} />
      </Figure>
      <Metadata>
        <Subtitle>
          {`${movie.vote_average} `}
          <FontAwesomeIcon icon="star" />
        </Subtitle>
        <Title>{movie.original_title}</Title>
      </Metadata>
      <Anchor to={`/title?id=${movie.id}`} />
      <AddToWatchlist component={Watchlist} id={movie.id}>
        +
      </AddToWatchlist>
    </Wrapper>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object,
};

export default MovieItem;
