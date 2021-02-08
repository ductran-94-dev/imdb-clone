/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import MoviesList from 'components/MoviesList';
import PageGroup from 'components/PageGroup';
import PageSection from 'components/PageSection';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { loadPopularMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectPopularMovies,
  makeSelectPopularMoviesError,
  makeSelectPopularMoviesLoading,
} from './selectors';

const key = 'home';

export function HomePage({
  movies,
  onLoadPopularMovies,
  popularError,
  popularLoading,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoadPopularMovies();
  }, []);

  const moviesListProps = {
    loading: popularLoading,
    error: popularError,
    movies,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <PageGroup title="Featured today">
          <PageSection title="">
            <MoviesList {...moviesListProps} />
          </PageSection>
        </PageGroup>
        <PageGroup title="What to watch">
          <PageSection title="Top picks">
            <MoviesList {...moviesListProps} />
          </PageSection>
          <PageSection title="From your Watchlist">
            <MoviesList {...moviesListProps} />
          </PageSection>
          <PageSection title="Fan favourites">
            <MoviesList {...moviesListProps} />
          </PageSection>
          <PageSection title="More to watch">
            <MoviesList {...moviesListProps} />
          </PageSection>
        </PageGroup>
        <PageGroup title="Exclusive videos">
          <PageSection title="IMDb Originals">
            <MoviesList {...moviesListProps} />
          </PageSection>
        </PageGroup>
        <PageGroup title="Explore what’s streaming">
          <PageSection title="">
            <MoviesList {...moviesListProps} />
          </PageSection>
          <PageSection title="">
            <MoviesList {...moviesListProps} />
          </PageSection>
        </PageGroup>
        <PageGroup title="More to explore">
          <PageSection title="Editors’ picks" moreLink="/editors_picks">
            <MoviesList {...moviesListProps} />
          </PageSection>
          <PageSection title="Born today">
            <MoviesList {...moviesListProps} />
          </PageSection>
          <PageSection title="Top news">
            <MoviesList {...moviesListProps} />
          </PageSection>
          <PageSection title="Recently viewed">
            <MoviesList {...moviesListProps} />
          </PageSection>
        </PageGroup>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  popularLoading: PropTypes.bool,
  popularError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadPopularMovies: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  movies: makeSelectPopularMovies(),
  popularLoading: makeSelectPopularMoviesLoading(),
  popularError: makeSelectPopularMoviesError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadPopularMovies: () => {
      dispatch(loadPopularMovies());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
