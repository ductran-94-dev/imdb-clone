/**
 * Gets the repositories of the user from Github
 */

import { all, takeLatest } from 'redux-saga/effects';
import { REQUEST } from 'utils/constants';
import request from 'utils/request';
import { createAsyncActionCreator } from 'utils/reduxHelpers';
import * as appActions from 'containers/App/actions';
import * as homeActions from './actions';

export function* fetchUpcomingMovies() {
  const requestURL = `/movie/upcoming?page=1`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.upcomingMovies,
  );
}

export function* fetchPopularMovies() {
  const requestURL = `/movie/popular?page=1`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.popularMovies,
  );
}

export function* fetchFeaturedToday() {
  const requestURL = `/movie/popular?page=2`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.featuredToday,
  );
}
export function* fetchTopPicks() {
  const requestURL = `/movie/popular?page=3`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.topPicks,
  );
}
export function* fetchWatchlist() {
  const requestURL = `/movie/popular?page=4`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.watchlist,
  );
}
export function* fetchFanFavourites() {
  const requestURL = `/movie/top_rated?page=1`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.fanFavourites,
  );
}
export function* fetchMoveToWatch() {
  const requestURL = `/movie/top_rated?page=2`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.moveToWatch,
  );
}
export function* fetchImdbOriginals() {
  const requestURL = `/movie/top_rated?page=3`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.imdbOriginals,
  );
}
export function* fetchEditorsPicks() {
  const requestURL = `/movie/top_rated?page=4`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.editorsPicks,
  );
}
export function* fetchBornToday() {
  const requestURL = `/person/popular?page=1`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.bornToday,
  );
}
export function* fetchTopNews() {
  const requestURL = `/movie/top_rated?page=6`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    homeActions.topNews,
  );
}
export function* fetchRecentlyViewed() {
  const requestURL = `/movie/top_rated?page=8`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    appActions.recentlyViewed,
  );
}

/** *************************************************************************** */
/** **************** Root saga manages watcher lifecycle ********************** */
/** *************************************************************************** */

export function* watchFeaturedToday() {
  yield takeLatest(homeActions.FEATURED_TODAY[REQUEST], fetchFeaturedToday);
}
export function* watchTopPicks() {
  yield takeLatest(homeActions.TOP_PICKS[REQUEST], fetchTopPicks);
}
export function* watchWatchlist() {
  yield takeLatest(homeActions.WATCHLIST[REQUEST], fetchWatchlist);
}
export function* watchFanFavourites() {
  yield takeLatest(homeActions.FAN_FAVOURITES[REQUEST], fetchFanFavourites);
}
export function* watchMoveToWatch() {
  yield takeLatest(homeActions.MOVE_TO_WATCH[REQUEST], fetchMoveToWatch);
}
export function* watchImdbOriginals() {
  yield takeLatest(homeActions.IMDB_ORIGINALS[REQUEST], fetchImdbOriginals);
}
export function* watchEditorsPicks() {
  yield takeLatest(homeActions.EDITORS_PICKS[REQUEST], fetchEditorsPicks);
}
export function* watchBornToday() {
  yield takeLatest(homeActions.BORN_TODAY[REQUEST], fetchBornToday);
}
export function* watchTopNews() {
  yield takeLatest(homeActions.TOP_NEWS[REQUEST], fetchTopNews);
}
export function* watchRecentlyViewed() {
  yield takeLatest(appActions.RECENTLY_VIEWED[REQUEST], fetchRecentlyViewed);
}

export function* watchUpcomingMovies() {
  yield takeLatest(homeActions.UPCOMING_MOVIES[REQUEST], fetchUpcomingMovies);
}

export function* watchPopularMovies() {
  yield takeLatest(homeActions.POPULAR_MOVIES[REQUEST], fetchPopularMovies);
}

export default function* rootSaga() {
  yield all([
    watchPopularMovies(),
    watchUpcomingMovies(),
    watchFeaturedToday(),
    watchTopPicks(),
    watchWatchlist(),
    watchFanFavourites(),
    watchMoveToWatch(),
    watchImdbOriginals(),
    watchEditorsPicks(),
    watchBornToday(),
    watchTopNews(),
    watchRecentlyViewed(),
  ]);
}
