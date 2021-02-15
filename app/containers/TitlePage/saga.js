import { API_KEY } from 'containers/App/constants';
import { all, takeLatest } from 'redux-saga/effects';
import { REQUEST } from 'utils/constants';
import request from 'utils/request';
import { fetchEntity } from 'utils/sagaCreator';
import * as appActions from 'containers/App/actions';

export function* fetchRecentlyViewed() {
  const requestURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=8`;
  yield fetchEntity(request, requestURL, appActions.recentlyViewed);
}

/** *************************************************************************** */
/** **************** Root saga manages watcher lifecycle ********************** */
/** *************************************************************************** */

export function* watchRecentlyViewed() {
  yield takeLatest(appActions.RECENTLY_VIEWED[REQUEST], fetchRecentlyViewed);
}

export default function* rootSaga() {
  yield all([watchRecentlyViewed()]);
}
