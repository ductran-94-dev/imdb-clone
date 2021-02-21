/**
 * Gets the repositories of the user from Github
 */

import { API_KEY } from 'containers/App/constants';
import { all, takeLatest, delay } from 'redux-saga/effects';
import { REQUEST } from 'utils/constants';
import request from 'utils/request';
import { fetchEntity } from 'utils/sagaCreator';
import * as appActions from 'containers/App/actions';
import * as homeActions from './actions';

export function* fetchUpcomingMovies() {
  const requestURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  yield fetchEntity(request, requestURL, homeActions.upcomingMovies);
}

export function* fetchPopularMovies() {
  const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  yield fetchEntity(request, requestURL, homeActions.popularMovies);
}

export function* fetchFeaturedToday() {
  const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.featuredToday);
}
export function* fetchTopPicks() {
  const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.topPicks);
}
export function* fetchWatchlist() {
  const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=4`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.watchlist);
}
export function* fetchFanFavourites() {
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.fanFavourites);
}
export function* fetchMoveToWatch() {
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.moveToWatch);
}
export function* fetchImdbOriginals() {
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.imdbOriginals);
}
export function* fetchEditorsPicks() {
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=4`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.editorsPicks);
}
export function* fetchBornToday() {
  const requestURL = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.bornToday);
}
export function* fetchTopNews() {
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=6`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, homeActions.topNews);
}
export function* fetchRecentlyViewed() {
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=8`;
  yield delay(2000);
  yield fetchEntity(request, requestURL, appActions.recentlyViewed);
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
