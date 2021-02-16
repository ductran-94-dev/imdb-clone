/**
 *
 * TitleSimilar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import MovieItem from 'components/MovieItem';

function TitleSimilar({ titleSimilar }) {
  return (
    <Row>
      {titleSimilar &&
        titleSimilar.map(item => (
          <Col key={`titleRecommendation-${item.id}`} sm={3}>
            <MovieItem movie={item} />
          </Col>
        ))}
    </Row>
  );
}

TitleSimilar.propTypes = {
  titleSimilar: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleSimilar;
