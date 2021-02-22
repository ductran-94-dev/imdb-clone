/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;
const selectGlobal = state => state.global || initialState;

/**
 * Other specific selectors
 */
const makeSelectAsyncRecentlyViewed = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.recentlyViewed,
  );

/**
 * Default selector used by TitlePage
 */

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectAsyncUpcomingMovies = () =>
  createSelector(
    selectHome,
    homeState => homeState.upcomingMovies,
  );

const makeSelectAsyncPopularMovies = () =>
  createSelector(
    selectHome,
    homeState => homeState.popularMovies,
  );

const makeSelectAsyncFeaturedToday = () =>
  createSelector(
    selectHome,
    homeState => homeState.featuredToday,
  );

const makeSelectAsyncTopPicks = () =>
  createSelector(
    selectHome,
    homeState => homeState.topPicks,
  );

const makeSelectAsyncWatchlist = () =>
  createSelector(
    selectHome,
    homeState => homeState.watchlist,
  );

const makeSelectAsyncFanFavourites = () =>
  createSelector(
    selectHome,
    homeState => homeState.fanFavourites,
  );

const makeSelectAsyncMoveToWatch = () =>
  createSelector(
    selectHome,
    homeState => homeState.moveToWatch,
  );

const makeSelectAsyncImdbOriginals = () =>
  createSelector(
    selectHome,
    homeState => homeState.imdbOriginals,
  );

const makeSelectAsyncEditorsPicks = () =>
  createSelector(
    selectHome,
    homeState => homeState.editorsPicks,
  );

const makeSelectAsyncBornToday = () =>
  createSelector(
    selectHome,
    homeState => homeState.bornToday,
  );

const makeSelectAsyncTopNews = () =>
  createSelector(
    selectHome,
    homeState => homeState.topNews,
  );

export {
  selectHome,
  makeSelectUsername,
  makeSelectAsyncUpcomingMovies,
  makeSelectAsyncPopularMovies,
  makeSelectAsyncFeaturedToday,
  makeSelectAsyncTopPicks,
  makeSelectAsyncWatchlist,
  makeSelectAsyncFanFavourites,
  makeSelectAsyncMoveToWatch,
  makeSelectAsyncImdbOriginals,
  makeSelectAsyncEditorsPicks,
  makeSelectAsyncBornToday,
  makeSelectAsyncTopNews,
  makeSelectAsyncRecentlyViewed,
};
