/**
 *
 * TvShowItem
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

function TvShowItem({ item }) {
  const posterPath = getPoster(item.poster_path);

  return (
    <Wrapper>
      <Figure>
        <Img src={posterPath} alt={item.title} />
      </Figure>
      <Metadata>
        <Subtitle>
          {`${item.vote_average} `}
          <FontAwesomeIcon icon="star" />
        </Subtitle>
        <Title>{item.name}</Title>
      </Metadata>
      <Anchor to={`/title?id=${item.id}`} />
      <AddToWatchlist component={Watchlist} id={item.id}>
        +
      </AddToWatchlist>
    </Wrapper>
  );
}

TvShowItem.propTypes = {
  item: PropTypes.object,
};

export default TvShowItem;
