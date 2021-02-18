import { API_KEY } from 'containers/App/constants';
import { all, takeLatest, select } from 'redux-saga/effects';
import { REQUEST } from 'utils/constants';
import request from 'utils/request';
import { fetchEntity } from 'utils/sagaCreator';
import * as searchActions from './actions';
import { makeSelectKeyword } from './selectors';

export function* searchKeywords() {
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `https://api.themoviedb.org/3/search/keyword?query=${keyword}&api_key=${API_KEY}&language=en-US`;

  yield fetchEntity(request, requestURL, searchActions.searchKeywords);
}

export function* searchMovies() {
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}&language=en-US&page=1`;

  yield fetchEntity(request, requestURL, searchActions.searchMovies);
}

export function* searchPeople() {
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `https://api.themoviedb.org/3/search/person?query=${keyword}&api_key=${API_KEY}&language=en-US&page=1`;

  yield fetchEntity(request, requestURL, searchActions.searchPeople);
}

export function* searchTvShows() {
  const keyword = yield select(makeSelectKeyword());
  const requestURL = `https://api.themoviedb.org/3/search/tv?query=${keyword}&api_key=${API_KEY}&language=en-US&page=1`;

  yield fetchEntity(request, requestURL, searchActions.searchTvShows);
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
