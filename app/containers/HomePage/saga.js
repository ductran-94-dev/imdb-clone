/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { API_KEY, LOAD_REPOS } from 'containers/App/constants';
import { LOAD_POPULAR_MOVIES } from 'containers/HomePage/constants';

import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import {
  popularMoviesLoaded,
  popularMoviesError,
} from 'containers/HomePage/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  // eslint-disable-next-line no-console
  console.log('username', username);

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getPopularMovies() {
  const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const { results, page } = yield call(request, requestURL);
    yield put(popularMoviesLoaded(results, page));
  } catch (err) {
    yield put(popularMoviesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* watchGetRepos() {
  yield takeLatest(LOAD_REPOS, getRepos);
}

export function* watchGetPopularMovies() {
  yield takeLatest(LOAD_POPULAR_MOVIES, getPopularMovies);
}

export default function* rootSaga() {
  yield all([watchGetPopularMovies(), watchGetRepos()]);
}
