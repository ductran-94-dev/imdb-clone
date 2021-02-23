import { all, takeLatest, select, delay } from 'redux-saga/effects';
import { REQUEST } from 'utils/constants';
import request from 'utils/request';
import { fetchEntity } from 'utils/sagaCreator';
import * as searchActions from './actions';
import { makeSelectKeyword } from './selectors';

export function* searchKeywords() {
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `/search/keyword?query=${keyword}`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, searchActions.searchKeywords);
}

export function* searchMovies() {
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `/search/movie?query=${keyword}&page=1`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, searchActions.searchMovies);
}

export function* searchPeople() {
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `/search/person?query=${keyword}&page=1`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, searchActions.searchPeople);
}

export function* searchTvShows() {
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `/search/tv?query=${keyword}&page=1`;

  yield delay(2000);
  yield fetchEntity(request, 'get', requestURL, searchActions.searchTvShows);
}

/** *************************************************************************** */
/** **************** Root saga manages watcher lifecycle ********************** */
/** *************************************************************************** */

export function* watchSearchKeywords() {
  yield takeLatest(searchActions.SEARCH_KEYWORDS[REQUEST], searchKeywords);
}

export function* watchSearchMovies() {
  yield takeLatest(searchActions.SEARCH_MOVIES[REQUEST], searchMovies);
}

export function* watchSearchPeople() {
  yield takeLatest(searchActions.SEARCH_PEOPLE[REQUEST], searchPeople);
}

export function* watchSearchTvShows() {
  yield takeLatest(searchActions.SEARCH_KEYWORDS[REQUEST], searchTvShows);
}

export default function* searchPageSaga() {
  yield all([
    watchSearchKeywords(),
    watchSearchMovies(),
    watchSearchPeople(),
    watchSearchTvShows(),
  ]);
}
