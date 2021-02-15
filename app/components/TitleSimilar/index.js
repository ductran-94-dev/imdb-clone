/**
 *
 * TitleSimilar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

function TitleSimilar({ titleSimilar }) {
  return (
    <Row>
      {titleSimilar &&
        titleSimilar.map(item => (
          <Col key={`titleRecommendation-${item.id}`} sm={3}>
            <img
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face${
                item.poster_path
              }`}
              alt={item.original_title}
              className="mw-100"
            />
            <h6 className="mt-3">{item.title}</h6>
          </Col>
        ))}
    </Row>
  );
}

TitleSimilar.propTypes = {
  titleSimilar: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleSimilar;
