/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectUpcomingMovies = () =>
  createSelector(
    selectHome,
    homeState => homeState.upcomingMovies.items,
  );

const makeSelectPopularMovies = () =>
  createSelector(
    selectHome,
    homeState => homeState.popularMovies.items,
  );
const makeSelectFeaturedToday = () =>
  createSelector(
    selectHome,
    homeState => homeState.featuredToday.items,
  );
const makeSelectTopPicks = () =>
  createSelector(
    selectHome,
    homeState => homeState.topPicks.items,
  );
const makeSelectWatchlist = () =>
  createSelector(
    selectHome,
    homeState => homeState.watchlist.items,
  );
const makeSelectFanFavourites = () =>
  createSelector(
    selectHome,
    homeState => homeState.fanFavourites.items,
  );
const makeSelectMoveToWatch = () =>
  createSelector(
    selectHome,
    homeState => homeState.moveToWatch.items,
  );
const makeSelectImdbOriginals = () =>
  createSelector(
    selectHome,
    homeState => homeState.imdbOriginals.items,
  );
const makeSelectEditorsPicks = () =>
  createSelector(
    selectHome,
    homeState => homeState.editorsPicks.items,
  );
const makeSelectBornToday = () =>
  createSelector(
    selectHome,
    homeState => homeState.bornToday.items,
  );
const makeSelectTopNews = () =>
  createSelector(
    selectHome,
    homeState => homeState.topNews.items,
  );
const makeSelectRecentlyViewed = () =>
  createSelector(
    selectHome,
    homeState => homeState.recentlyViewed.items,
  );

export {
  selectHome,
  makeSelectUsername,
  makeSelectUpcomingMovies,
  makeSelectPopularMovies,
  makeSelectFeaturedToday,
  makeSelectTopPicks,
  makeSelectWatchlist,
  makeSelectFanFavourites,
  makeSelectMoveToWatch,
  makeSelectImdbOriginals,
  makeSelectEditorsPicks,
  makeSelectBornToday,
  makeSelectTopNews,
  makeSelectRecentlyViewed,
};
