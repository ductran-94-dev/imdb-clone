/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import * as appActions from 'containers/App/actions';
import * as appSelectors from 'containers/App/selectors';

import { Container } from 'react-bootstrap';
import MoviesList from 'components/MoviesList';
import PageGroup from 'components/PageGroup';
import PageSection from 'components/PageSection';

import * as homeActions from './actions';
import * as homeSelectors from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  upcomingMovies,
  popularMovies,
  featuredToday,
  topPicks,
  watchlist,
  fanFavourites,
  moveToWatch,
  imdbOriginals,
  editorsPicks,
  bornToday,
  topNews,
  recentlyViewed,
  onLoadUpcomingMovies,
  onLoadPopularMovies,
  onLoadFeaturedToday,
  onLoadTopPicks,
  onLoadWatchlist,
  onLoadFanFavourites,
  onLoadMoveToWatch,
  onLoadImdbOriginals,
  onLoadEditorsPicks,
  onLoadBornToday,
  onLoadTopNews,
  onLoadRecentlyViewed,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoadUpcomingMovies();
    onLoadPopularMovies();
    onLoadFeaturedToday();
    onLoadTopPicks();
    onLoadWatchlist();
    onLoadFanFavourites();
    onLoadMoveToWatch();
    onLoadImdbOriginals();
    onLoadEditorsPicks();
    onLoadBornToday();
    onLoadTopNews();
    onLoadRecentlyViewed();
  }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Container>
        <PageGroup title="Featured today">
          <PageSection title="">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: featuredToday,
              }}
            />
          </PageSection>
        </PageGroup>
        <PageGroup title="What to watch">
          <PageSection title="Top picks">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: topPicks,
              }}
            />
          </PageSection>
          <PageSection title="From your Watchlist">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: watchlist,
              }}
            />
          </PageSection>
          <PageSection title="Fan favourites">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: fanFavourites,
              }}
            />
          </PageSection>
          <PageSection title="More to watch">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: moveToWatch,
              }}
            />
          </PageSection>
        </PageGroup>
        <PageGroup title="Exclusive videos">
          <PageSection title="IMDb Originals">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: imdbOriginals,
              }}
            />
          </PageSection>
        </PageGroup>
        <PageGroup title="Explore what’s streaming">
          <PageSection title="">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: upcomingMovies,
              }}
            />
          </PageSection>
          <PageSection title="">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: popularMovies,
              }}
            />
          </PageSection>
        </PageGroup>
        <PageGroup title="More to explore">
          <PageSection title="Editors’ picks" seeAllLink="/editors_picks">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: editorsPicks,
              }}
            />
          </PageSection>
          <PageSection title="Born today">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: bornToday,
              }}
            />
          </PageSection>
          <PageSection title="Top news">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: topNews,
              }}
            />
          </PageSection>
          <PageSection title="Recently viewed">
            <MoviesList
              {...{
                loading: false,
                error: false,
                movies: recentlyViewed,
              }}
            />
          </PageSection>
        </PageGroup>
      </Container>
    </article>
  );
}

HomePage.propTypes = {
  popularMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  upcomingMovies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  featuredToday: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  topPicks: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  watchlist: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  fanFavourites: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  moveToWatch: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  imdbOriginals: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  editorsPicks: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  bornToday: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  topNews: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  recentlyViewed: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadUpcomingMovies: PropTypes.func,
  onLoadPopularMovies: PropTypes.func,
  onLoadFeaturedToday: PropTypes.func,
  onLoadTopPicks: PropTypes.func,
  onLoadWatchlist: PropTypes.func,
  onLoadFanFavourites: PropTypes.func,
  onLoadMoveToWatch: PropTypes.func,
  onLoadImdbOriginals: PropTypes.func,
  onLoadEditorsPicks: PropTypes.func,
  onLoadBornToday: PropTypes.func,
  onLoadTopNews: PropTypes.func,
  onLoadRecentlyViewed: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  popularMovies: homeSelectors.makeSelectPopularMovies(),
  upcomingMovies: homeSelectors.makeSelectUpcomingMovies(),
  featuredToday: homeSelectors.makeSelectFeaturedToday(),
  topPicks: homeSelectors.makeSelectTopPicks(),
  watchlist: homeSelectors.makeSelectWatchlist(),
  fanFavourites: homeSelectors.makeSelectFanFavourites(),
  moveToWatch: homeSelectors.makeSelectMoveToWatch(),
  imdbOriginals: homeSelectors.makeSelectImdbOriginals(),
  editorsPicks: homeSelectors.makeSelectEditorsPicks(),
  bornToday: homeSelectors.makeSelectBornToday(),
  topNews: homeSelectors.makeSelectTopNews(),
  recentlyViewed: appSelectors.makeSelectRecentlyViewed(),
});

export function mapDispatchToProps(dispatch) {
  const onLoadUpcomingMovies = homeActions.upcomingMovies.request;
  const onLoadPopularMovies = homeActions.popularMovies.request;
  const onLoadFeaturedToday = homeActions.featuredToday.request;
  const onLoadTopPicks = homeActions.topPicks.request;
  const onLoadWatchlist = homeActions.watchlist.request;
  const onLoadFanFavourites = homeActions.fanFavourites.request;
  const onLoadMoveToWatch = homeActions.moveToWatch.request;
  const onLoadImdbOriginals = homeActions.imdbOriginals.request;
  const onLoadEditorsPicks = homeActions.editorsPicks.request;
  const onLoadBornToday = homeActions.bornToday.request;
  const onLoadTopNews = homeActions.topNews.request;
  const onLoadRecentlyViewed = appActions.recentlyViewed.request;

  return bindActionCreators(
    {
      onLoadUpcomingMovies,
      onLoadPopularMovies,
      onLoadFeaturedToday,
      onLoadTopPicks,
      onLoadWatchlist,
      onLoadFanFavourites,
      onLoadMoveToWatch,
      onLoadImdbOriginals,
      onLoadEditorsPicks,
      onLoadBornToday,
      onLoadTopNews,
      onLoadRecentlyViewed,
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
)(HomePage);
