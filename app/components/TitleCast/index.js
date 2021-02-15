/**
 *
 * TitleCast
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

function TitleCast({ titleCast }) {
  return (
    <Row>
      {titleCast &&
        titleCast.map(item => (
          <Col key={`titleCast-${item.id}`} sm={6} className="mb-4">
            <img
              src={`https://www.themoviedb.org/t/p/w276_and_h350_face${
                item.profile_path
              }`}
              className="w-25"
              alt={item.original_name}
            />
            <h6 className="mt-3">{item.name}</h6>
          </Col>
        ))}
    </Row>
  );
}

TitleCast.propTypes = {
  titleCast: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleCast;
