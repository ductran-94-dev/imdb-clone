/**
 *
 * TitleHero
 *
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function TitleHero({ titleDetails }) {
  return (
    <div>
      <Row>
        <Col sm={3}>
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${
              titleDetails.poster_path
            }`}
            alt={titleDetails.original_title}
            className="mw-100"
          />
        </Col>
        <Col sm={6}>
          <img
            src={`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${
              titleDetails.backdrop_path
            }`}
            alt={titleDetails.original_title}
            className="mw-100"
          />
        </Col>
        <Col sm={3}>
          <div className="p-5 bg-dark m-2 text-center">
            <FontAwesomeIcon icon="images" size="2x" />
            <p>54 PHOTOS</p>
          </div>
          <div className="p-5 bg-dark m-2 text-center">
            <FontAwesomeIcon icon="play-circle" size="2x" />
            <p>27 VIDEOS</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

TitleHero.propTypes = {
  titleDetails: PropTypes.object,
};

export default TitleHero;
