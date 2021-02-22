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

import { Container } from 'react-bootstrap';
import MoviesList from 'components/MoviesList';
import CastList from 'components/CastList';
import PageGroup from 'components/PageGroup';
import PageSection from 'components/PageSection';

import * as homeActions from './actions';
import * as homeSelectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';

const key = 'home';

export function HomePage({
  asyncUpcomingMovies,
  asyncPopularMovies,
  asyncFeaturedToday,
  asyncTopPicks,
  asyncWatchlist,
  asyncFanFavourites,
  asyncMoveToWatch,
  asyncImdbOriginals,
  asyncEditorsPicks,
  asyncBornToday,
  asyncTopNews,
  asyncRecentlyViewed,
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
        <Wrapper>
          <PageGroup title="Featured today">
            <PageSection>
              <MoviesList {...asyncFeaturedToday} />
            </PageSection>
          </PageGroup>
          <PageGroup title="What to watch">
            <PageSection title="Top picks">
              <MoviesList {...asyncTopPicks} />
            </PageSection>
            <PageSection title="From your Watchlist">
              <MoviesList {...asyncWatchlist} />
            </PageSection>
            <PageSection title="Fan favourites">
              <MoviesList {...asyncFanFavourites} />
            </PageSection>
            <PageSection title="More to watch">
              <MoviesList {...asyncMoveToWatch} />
            </PageSection>
          </PageGroup>
          <PageGroup title="Exclusive videos">
            <PageSection title="IMDb Originals">
              <MoviesList {...asyncImdbOriginals} />
            </PageSection>
          </PageGroup>
          <PageGroup title="Explore what’s streaming">
            <PageSection title="">
              <MoviesList {...asyncUpcomingMovies} />
            </PageSection>
            <PageSection title="">
              <MoviesList {...asyncPopularMovies} />
            </PageSection>
          </PageGroup>
          <PageGroup title="More to explore">
            <PageSection title="Editors’ picks" seeAllLink="/editors_picks">
              <MoviesList {...asyncEditorsPicks} />
            </PageSection>
            <PageSection title="Born today">
              <CastList {...asyncBornToday} />
            </PageSection>
            <PageSection title="Top news">
              <MoviesList {...asyncTopNews} />
            </PageSection>
            <PageSection title="Recently viewed">
              <MoviesList {...asyncRecentlyViewed} />
            </PageSection>
          </PageGroup>
        </Wrapper>
      </Container>
    </article>
  );
}

HomePage.propTypes = {
  asyncPopularMovies: PropTypes.object,
  asyncUpcomingMovies: PropTypes.object,
  asyncFeaturedToday: PropTypes.object,
  asyncTopPicks: PropTypes.object,
  asyncWatchlist: PropTypes.object,
  asyncFanFavourites: PropTypes.object,
  asyncMoveToWatch: PropTypes.object,
  asyncImdbOriginals: PropTypes.object,
  asyncEditorsPicks: PropTypes.object,
  asyncBornToday: PropTypes.object,
  asyncTopNews: PropTypes.object,
  asyncRecentlyViewed: PropTypes.object,
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
  asyncPopularMovies: homeSelectors.makeSelectAsyncPopularMovies(),
  asyncUpcomingMovies: homeSelectors.makeSelectAsyncUpcomingMovies(),
  asyncFeaturedToday: homeSelectors.makeSelectAsyncFeaturedToday(),
  asyncTopPicks: homeSelectors.makeSelectAsyncTopPicks(),
  asyncWatchlist: homeSelectors.makeSelectAsyncWatchlist(),
  asyncFanFavourites: homeSelectors.makeSelectAsyncFanFavourites(),
  asyncMoveToWatch: homeSelectors.makeSelectAsyncMoveToWatch(),
  asyncImdbOriginals: homeSelectors.makeSelectAsyncImdbOriginals(),
  asyncEditorsPicks: homeSelectors.makeSelectAsyncEditorsPicks(),
  asyncBornToday: homeSelectors.makeSelectAsyncBornToday(),
  asyncTopNews: homeSelectors.makeSelectAsyncTopNews(),
  asyncRecentlyViewed: homeSelectors.makeSelectAsyncRecentlyViewed(),
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
