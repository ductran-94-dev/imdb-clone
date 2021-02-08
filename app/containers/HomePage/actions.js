/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  LOAD_POPULAR_MOVIES,
  LOAD_POPULAR_MOVIES_ERROR,
  LOAD_POPULAR_MOVIES_SUCCESS,
} from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function loadPopularMovies() {
  return {
    type: LOAD_POPULAR_MOVIES,
  };
}

export function popularMoviesLoaded(movies, page) {
  return {
    type: LOAD_POPULAR_MOVIES_SUCCESS,
    movies,
    page,
  };
}

export function popularMoviesError(error) {
  return {
    type: LOAD_POPULAR_MOVIES_ERROR,
    error,
  };
}
