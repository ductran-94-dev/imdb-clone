/**
 *
 * KeywordList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import KeywordItem from 'components/KeywordItem';
import Grid from './Grid';
import Wrapper from './Wrapper';

function KeywordList({ loading, error, items }) {
  if (loading) {
    return (
      <Wrapper>
        <LoadingIndicator />
      </Wrapper>
    );
  }

  if (error !== false) {
    const ErrorComponent = () => <p>Something went wrong, please try again!</p>;

    return (
      <Wrapper>
        <ErrorComponent />
      </Wrapper>
    );
  }

  if (!!items && items !== false) {
    return (
      <Wrapper>
        <Grid>
          {items.map(item => (
            <KeywordItem key={`keyword-${item.id}`} item={item} />
          ))}
        </Grid>
      </Wrapper>
    );
  }

  return null;
}

KeywordList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.any,
};

export default KeywordList;
