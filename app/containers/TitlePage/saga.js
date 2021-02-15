import { API_KEY } from 'containers/App/constants';
import { all, takeLatest, select } from 'redux-saga/effects';
import { REQUEST } from 'utils/constants';
import request from 'utils/request';
import { fetchEntity } from 'utils/sagaCreator';
import * as appActions from 'containers/App/actions';
import * as titleActions from './actions';
import { makeSelectMovieId } from './selectors';

export function* fetchMovieDetails() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  yield fetchEntity(request, requestURL, titleActions.movieDetails);
}

export function* fetchMoviePhotos() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}&language=en-US&page=1`;

  yield fetchEntity(request, requestURL, titleActions.moviePhotos);
}

export function* fetchMovieVideos() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US&page=1`;

  yield fetchEntity(request, requestURL, titleActions.movieVideos);
}

export function* fetchMovieCast() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`;

  yield fetchEntity(request, requestURL, titleActions.movieCast);
}

export function* fetchMovieSimilar() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;

  yield fetchEntity(request, requestURL, titleActions.movieSimilar);
}

export function* fetchMovieReviews() {
  const movieId = yield select(makeSelectMovieId());
  const requestURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  yield fetchEntity(request, requestURL, titleActions.movieReviews);
}

export function* fetchRecentlyViewed() {
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=7`;

  yield fetchEntity(request, requestURL, appActions.recentlyViewed);
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
