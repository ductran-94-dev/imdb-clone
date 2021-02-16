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
// import makeSelectAddToWatchlist from './selectors';
import reducer from './reducer';

export function AddToWatchlist({ component, id, ...restProps }) {
  useInjectReducer({
    key: 'addToWatchlist',
    reducer,
  });

  const onAdd = e => {
    e.stopPropagation();
    // eslint-disable-next-line no-alert
    alert(`addToWatchlist ${id}`);
  };

  return <Button as={component} onClick={onAdd} {...restProps} />;
}

AddToWatchlist.propTypes = {
  component: PropTypes.any,
  id: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  // addToWatchlist: makeSelectAddToWatchlist(),
});

function mapDispatchToProps(/* dispatch */) {
  return {
    // dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddToWatchlist);
