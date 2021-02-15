/**
 *
 * AddToWatchlist
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Button } from 'react-bootstrap';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddToWatchlist from './selectors';
import reducer from './reducer';

export function AddToWatchlist({ component }) {
  useInjectReducer({ key: 'addToWatchlist', reducer });

  const addToWatchlist = () => {
    // eslint-disable-next-line no-alert
    alert('addToWatchlist');
  };

  return (
    <Button as={component} onClick={addToWatchlist}>
      Add to watchlist
    </Button>
  );
}

AddToWatchlist.propTypes = {
  component: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  addToWatchlist: makeSelectAddToWatchlist(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddToWatchlist);
