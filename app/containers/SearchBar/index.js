/**
 *
 * SearchBar
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSearchBar from './selectors';
import reducer from './reducer';
import Form from './Form';
import FormControl from './FormControl';

export function SearchBar() {
  useInjectReducer({
    key: 'searchBar',
    reducer,
  });
  const [keywork, setKeywork] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('haha', keywork);
  };

  const handleChange = e => {
    setKeywork(e.target.value);
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FormControl
        type="text"
        placeholder="Search IMDb"
        value={keywork}
        onChange={handleChange}
      />
    </Form>
  );
}

SearchBar.propTypes = {};

const mapStateToProps = createStructuredSelector({
  searchBar: makeSelectSearchBar(),
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

export default compose(withConnect)(SearchBar);
