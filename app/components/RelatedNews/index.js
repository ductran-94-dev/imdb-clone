/**
 *
 * RelatedNews
 *
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Box from 'components/Box';
// import PropTypes from 'prop-types';

function RelatedNews() {
  return (
    <Row>
      <Col sm={6}>
        <Box />
      </Col>
      <Col sm={6}>
        <Box />
      </Col>
    </Row>
  );
}

RelatedNews.propTypes = {};

export default RelatedNews;
