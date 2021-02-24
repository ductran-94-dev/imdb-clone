/**
 *
 * SearchPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { getSearchParam } from 'services/url';

import Container from 'react-bootstrap/Container';

import MoviesList from 'components/MoviesList';
import PageGroup from 'components/PageGroup';
import PageSection from 'components/PageSection';
import CastList from 'components/CastList';

import Wrapper from './Wrapper';
import KeywordList from './KeywordList';

import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

export function SearchPage({
  location,
  asyncSearchKeywords,
  asyncSearchMovies,
  asyncSearchPeople,
  asyncSearchTvShows,
  onChangeKeyword,
  onLoadSearchKeywords,
  onLoadSearchMovies,
  onLoadSearchPeople,
  onLoadSearchTvShows,
}) {
  useInjectReducer({ key: 'searchPage', reducer });
  useInjectSaga({ key: 'searchPage', saga });

  const keyword = getSearchParam(location, 'q');

  useEffect(() => {
    onChangeKeyword(keyword);
    onLoadSearchKeywords();
    onLoadSearchMovies();
    onLoadSearchPeople();
    onLoadSearchTvShows();
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Description of SearchPage" />
      </Helmet>
      <Container>
        <Wrapper>
          <PageGroup title="">
            <PageSection title="Keywords">
              <KeywordList {...asyncSearchKeywords} />
            </PageSection>
            <PageSection title="Movies">
              <MoviesList {...asyncSearchMovies} />
            </PageSection>
            <PageSection title="TV Shows">
              <MoviesList {...asyncSearchTvShows} />
            </PageSection>
            <PageSection title="People">
              <CastList {...asyncSearchPeople} />
            </PageSection>
          </PageGroup>
        </Wrapper>
      </Container>
    </div>
  );
}

SearchPage.propTypes = {
  location: PropTypes.object,
  asyncSearchKeywords: PropTypes.object,
  asyncSearchMovies: PropTypes.object,
  asyncSearchPeople: PropTypes.object,
  asyncSearchTvShows: PropTypes.object,
  onChangeKeyword: PropTypes.func,
  onLoadSearchKeywords: PropTypes.func,
  onLoadSearchMovies: PropTypes.func,
  onLoadSearchPeople: PropTypes.func,
  onLoadSearchTvShows: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  asyncSearchKeywords: selectors.makeSelectAsyncSearchKeywords(),
  asyncSearchMovies: selectors.makeSelectAsyncSearchMovies(),
  asyncSearchPeople: selectors.makeSelectAsyncSearchPeople(),
  asyncSearchTvShows: selectors.makeSelectAsyncSearchTvShows(),
  location: selectors.makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  const onChangeKeyword = actions.changeKeyword;
  const onLoadSearchKeywords = actions.searchKeywords.request;
  const onLoadSearchMovies = actions.searchMovies.request;
  const onLoadSearchPeople = actions.searchPeople.request;
  const onLoadSearchTvShows = actions.searchTvShows.request;

  return bindActionCreators(
    {
      onChangeKeyword,
      onLoadSearchKeywords,
      onLoadSearchMovies,
      onLoadSearchPeople,
      onLoadSearchTvShows,
    },
    dispatch,
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SearchPage);
