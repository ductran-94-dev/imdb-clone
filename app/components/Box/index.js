/**
 *
 * Box
 *
 */

import React from 'react';
import Card from 'react-bootstrap/Card';

function Box() {
  return (
    <Card className="rounded-0" bg="dark">
      <Card.Body className="py-5">
        This is some text within a card body.
      </Card.Body>
    </Card>
  );
}

Box.propTypes = {};

export default Box;
