/**
 *
 * TitleReviews
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function TitleReviews({ titleReviews }) {
  return (
    <React.Fragment>
      {titleReviews &&
        titleReviews.map(item => (
          <div key={`titleReview-${item.id}`}>
            <h6>@{item.author}</h6>
            <p>{item.content.slice(0, 400)}</p>
          </div>
        ))}
    </React.Fragment>
  );
}

TitleReviews.propTypes = {
  titleReviews: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default TitleReviews;
