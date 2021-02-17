/**
 *
 * ReviewItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Title from './Title';
import Text from './Text';

function ReviewItem({ item }) {
  return (
    <Wrapper>
      <Title>@{item.author}</Title>
      <Text dangerouslySetInnerHTML={{ __html: item.content.slice(0, 200) }} />
    </Wrapper>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.object,
};

export default ReviewItem;
