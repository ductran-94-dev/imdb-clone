import { all, takeLatest, select, delay } from 'redux-saga/effects';
import { REQUEST } from 'utils/constants';
import request from 'utils/request';
import { fetchEntity } from 'utils/sagaCreator';
import * as appActions from 'containers/App/actions';
import * as titleActions from './actions';
import { makeSelectMovieId } from './selectors';

export function* fetchMovieDetails() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `/movie/${movieId}?`;

  yield fetchEntity(request, 'get', requestURL, titleActions.movieDetails);
}

export function* fetchMoviePhotos() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `/movie/${movieId}/images?page=1`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, titleActions.moviePhotos);
}

export function* fetchMovieVideos() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `/movie/${movieId}/videos?page=1`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, titleActions.movieVideos);
}

export function* fetchMovieCast() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `/movie/${movieId}/credits?&page=1`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, titleActions.movieCast);
}

export function* fetchMovieSimilar() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `/movie/${movieId}/recommendations?&page=1`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, titleActions.movieSimilar);
}

export function* fetchMovieReviews() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `/movie/${movieId}/reviews?&page=1`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, titleActions.movieReviews);
}

export function* fetchRecentlyViewed() {
  const requestURL = `/movie/top_rated?&page=7`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, appActions.recentlyViewed);
}

/** *************************************************************************** */
/** **************** Root saga manages watcher lifecycle ********************** */
/** *************************************************************************** */

export function* watchMovieDetails() {
  yield takeLatest(titleActions.MOVIE_DETAILS[REQUEST], fetchMovieDetails);
}

export function* watchMoviePhotos() {
  yield takeLatest(titleActions.MOVIE_PHOTOS[REQUEST], fetchMoviePhotos);
}

export function* watchMovieVideos() {
  yield takeLatest(titleActions.MOVIE_VIDEOS[REQUEST], fetchMovieVideos);
}

export function* watchMovieCast() {
  yield takeLatest(titleActions.MOVIE_CAST[REQUEST], fetchMovieCast);
}

export function* watchMovieSimilar() {
  yield takeLatest(titleActions.MOVIE_SIMILAR[REQUEST], fetchMovieSimilar);
}

export function* watchMovieReviews() {
  yield takeLatest(titleActions.MOVIE_REVIEWS[REQUEST], fetchMovieReviews);
}

export function* watchRecentlyViewed() {
  yield takeLatest(appActions.RECENTLY_VIEWED[REQUEST], fetchRecentlyViewed);
}

export default function* rootSaga() {
  yield all([
    watchMovieDetails(),
    watchMoviePhotos(),
    watchMovieVideos(),
    watchMovieCast(),
    watchMovieSimilar(),
    watchMovieReviews(),
    watchRecentlyViewed(),
  ]);
}
