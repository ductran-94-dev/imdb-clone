/**
 *
 * TitleDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

function TitleDetails({ titleDetails }) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item variant="dark">
        Release date _ {titleDetails.release_date}
      </ListGroup.Item>
      <ListGroup.Item variant="dark">
        Country of origin _ {titleDetails.release_date}
      </ListGroup.Item>
      <ListGroup.Item variant="dark">
        Offical sites _ {titleDetails.homepage}
      </ListGroup.Item>
      <ListGroup.Item variant="dark">
        Languague _ {titleDetails.original_language}
      </ListGroup.Item>
      <ListGroup.Item variant="dark">
        Also known as _ {titleDetails.release_date}
      </ListGroup.Item>
      <ListGroup.Item variant="dark">
        Filming locations _ {titleDetails.release_date}
      </ListGroup.Item>
      <ListGroup.Item variant="dark">
        Production companies _ {titleDetails.release_date}
      </ListGroup.Item>
      <ListGroup.Item variant="dark">
        See more company credits at IMDbPro
      </ListGroup.Item>
    </ListGroup>
  );
}

TitleDetails.propTypes = {
  titleDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default TitleDetails;
