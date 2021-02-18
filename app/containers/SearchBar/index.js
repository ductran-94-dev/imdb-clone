/**
 *
 * SearchBar
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import { useInjectReducer } from 'utils/injectReducer';
import { getSearchParam } from 'services/url';

import * as selectors from './selectors';
import reducer from './reducer';
import Form from './Form';
import FormControl from './FormControl';

export function SearchBar({ dispatch, location }) {
  useInjectReducer({
    key: 'searchBar',
    reducer,
  });
  const initKeyword = getSearchParam(location, 'q') || '';
  const [keywork, setKeywork] = useState(initKeyword);

  const onSubmitForm = e => {
    e.preventDefault();

    dispatch(push(`/search?q=${keywork}`));
  };

  const handleChange = e => {
    const { value } = e.target;

    setKeywork(value);
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

SearchBar.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  location: selectors.makeSelectLocation(),
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
