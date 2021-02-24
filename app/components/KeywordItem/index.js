/**
 *
 * KeywordItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function KeywordItem({ item }) {
  return (
    <ButtonGroup aria-label={item.name} size="sm">
      <Button variant="secondary">
        <FontAwesomeIcon icon="tags" />
      </Button>
      <Button variant="secondary">{item.name}</Button>
    </ButtonGroup>
  );
}

KeywordItem.propTypes = {
  item: PropTypes.object,
};

export default KeywordItem;
