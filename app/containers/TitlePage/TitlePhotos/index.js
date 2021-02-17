/**
 *
 * TitlePhotos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Box from 'components/Box';

function TitlePhotos({ titlePhotos }) {
  return (
    <Row>
      {titlePhotos &&
        titlePhotos.map(item => (
          <Col key={`titlePhoto-${item.id}`} sm={3}>
            <Box />
          </Col>
        ))}
    </Row>
  );
}

TitlePhotos.propTypes = {
  titlePhotos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitlePhotos;
