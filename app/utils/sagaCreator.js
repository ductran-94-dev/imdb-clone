import { call, put, delay } from 'redux-saga/effects';

/*
 * entity must have a success, request and failure method
 * request is a function that returns a promise when called
 * */
export function* fetchEntity(request, method = 'get', url, entity, ...args) {
  yield delay(2000);

  try {
    const response = yield call(request, method, url);
    // we directly return the result object and throw away the headers and the status text here
    // if status and headers are needed, then instead of returning response.result, we have to return just response.
    yield put(entity.success(response, ...args));
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}
