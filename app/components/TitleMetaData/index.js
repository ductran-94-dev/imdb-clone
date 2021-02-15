/**
 *
 * TitleMetaData
 *
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { getYearAtReleaseDate } from 'services/date';
import { getVideoDurationString } from 'services/number';

import Wrapper from './Wrapper';
import Title from './Title';
import InlineList from './InlineList';
import InlineListItem from './InlineListItem';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import Button from './Button';

function TitleMetaData({ titleDetails, hidden }) {
  const titleDuration = getVideoDurationString(titleDetails.runtime);
  const titleYear = getYearAtReleaseDate(titleDetails.release_date);

  return (
    <Wrapper hidden={hidden}>
      <div>
        <Title>{titleDetails.title}</Title>
        <InlineList>
          <InlineListItem>{titleYear}</InlineListItem>
          <InlineListItem>PG-13</InlineListItem>
          <InlineListItem>{titleDuration}</InlineListItem>
        </InlineList>
      </div>
      <ListGroup horizontal>
        <ListGroupItem>
          <h6>IMDb RATING</h6>
          <Button block variant="outline-dark">
            <FontAwesomeIcon icon="star" className="text-warning" />
            {` ${titleDetails.vote_average}`} <sub>/10</sub>
          </Button>
        </ListGroupItem>
        <ListGroupItem>
          <h6>YOUR RATING</h6>
          <Button block variant="outline-dark">
            <FontAwesomeIcon icon="star" className="text-secondary" />
            {` Rate`}
          </Button>
        </ListGroupItem>
        <ListGroupItem>
          <h6>POPULARITY</h6>
          <Button block variant="outline-dark">
            <FontAwesomeIcon icon="chart-line" className="text-success" />
            {` ${titleDetails.popularity}`}
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Wrapper>
  );
}

TitleMetaData.propTypes = {
  titleDetails: PropTypes.object,
  hidden: PropTypes.bool,
};

export default TitleMetaData;
