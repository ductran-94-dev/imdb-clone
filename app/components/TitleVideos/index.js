/**
 *
 * TitleVideos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Box from 'components/Box';

function TitleVideos({ titleVideos }) {
  return (
    <Row>
      {titleVideos &&
        titleVideos.map(item => (
          <Col key={`titleVideo-${item.id}`} sm={6}>
            <Box />
            <h6 className="mt-3">{item.name}</h6>
          </Col>
        ))}
    </Row>
  );
}

TitleVideos.propTypes = {
  titleVideos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleVideos;
