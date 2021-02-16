/**
 *
 * TitleFact
 *
 */

import AddToWatchlist from 'containers/AddToWatchlist';
import PropTypes from 'prop-types';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from './Button';
import InlineList from './InlineList';
import InlineListItem from './InlineListItem';
import ListGroupItem from './ListGroupItem';
import { getFact } from './utils';
import Watchlist from './Watchlist';
import Wrapper from './Wrapper';

function TitleFact({ titleDetails, titleCast, titleCrew }) {
  const fact = getFact(titleCast, titleCrew);

  return (
    <Wrapper>
      <div>
        <div>
          {titleDetails.genres.map(item => (
            <Button key={`genre-${item.id}`} variant="outline-secondary">
              {item.name}
            </Button>
          ))}
        </div>
        <ListGroup variant="flush">
          <ListGroupItem>{titleDetails.overview}</ListGroupItem>
          {fact.map(item => (
            <ListGroupItem key={item.title} hidden={!item.content.length}>
              <strong>{item.title}</strong>
              <InlineList>
                {item.content.map(contentItem => (
                  <InlineListItem key={contentItem}>
                    <a href="/">{contentItem}</a>
                  </InlineListItem>
                ))}
              </InlineList>
            </ListGroupItem>
          ))}
          <ListGroupItem>
            <strong>
              IMDb<span className="text-info">Pro</span>
            </strong>
            <InlineList>
              <InlineListItem>
                <a href="/">See production, box office & company info</a>
              </InlineListItem>
            </InlineList>
          </ListGroupItem>
        </ListGroup>
      </div>
      <div>
        <AddToWatchlist
          component={Watchlist}
          size="lg"
          block
          id={titleDetails.id}
        >
          + Add To Watch
        </AddToWatchlist>
      </div>
    </Wrapper>
  );
}

TitleFact.propTypes = {
  titleDetails: PropTypes.object,
  titleCast: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  titleCrew: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleFact;
