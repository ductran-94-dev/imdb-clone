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

import { createAction, createRequestTypes } from 'utils/actionCreator';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { CHANGE_USERNAME } from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export const POPULAR_MOVIES = createRequestTypes('POPULAR_MOVIES');
export const popularMovies = {
  request: () => createAction(POPULAR_MOVIES[REQUEST]),
  success: response => createAction(POPULAR_MOVIES[SUCCESS], { response }),
  failure: response => createAction(POPULAR_MOVIES[FAILURE], { response }),
};

export const UPCOMING_MOVIES = createRequestTypes('UPCOMING_MOVIES');
export const upcomingMovies = {
  request: () => createAction(UPCOMING_MOVIES[REQUEST]),
  success: response => createAction(UPCOMING_MOVIES[SUCCESS], { response }),
  failure: response => createAction(UPCOMING_MOVIES[FAILURE], { response }),
};

export const FEATURED_TODAY = createRequestTypes('FEATURED_TODAY');
export const featuredToday = {
  request: () => createAction(FEATURED_TODAY[REQUEST]),
  success: response => createAction(FEATURED_TODAY[SUCCESS], { response }),
  failure: response => createAction(FEATURED_TODAY[FAILURE], { response }),
};

export const TOP_PICKS = createRequestTypes('TOP_PICKS');
export const topPicks = {
  request: () => createAction(TOP_PICKS[REQUEST]),
  success: response => createAction(TOP_PICKS[SUCCESS], { response }),
  failure: response => createAction(TOP_PICKS[FAILURE], { response }),
};

export const WATCHLIST = createRequestTypes('WATCHLIST');
export const watchlist = {
  request: () => createAction(WATCHLIST[REQUEST]),
  success: response => createAction(WATCHLIST[SUCCESS], { response }),
  failure: response => createAction(WATCHLIST[FAILURE], { response }),
};

export const FAN_FAVOURITES = createRequestTypes('FAN_FAVOURITES');
export const fanFavourites = {
  request: () => createAction(FAN_FAVOURITES[REQUEST]),
  success: response => createAction(FAN_FAVOURITES[SUCCESS], { response }),
  failure: response => createAction(FAN_FAVOURITES[FAILURE], { response }),
};

export const MOVE_TO_WATCH = createRequestTypes('MOVE_TO_WATCH');
export const moveToWatch = {
  request: () => createAction(MOVE_TO_WATCH[REQUEST]),
  success: response => createAction(MOVE_TO_WATCH[SUCCESS], { response }),
  failure: response => createAction(MOVE_TO_WATCH[FAILURE], { response }),
};

export const IMDB_ORIGINALS = createRequestTypes('IMDB_ORIGINALS');
export const imdbOriginals = {
  request: () => createAction(IMDB_ORIGINALS[REQUEST]),
  success: response => createAction(IMDB_ORIGINALS[SUCCESS], { response }),
  failure: response => createAction(IMDB_ORIGINALS[FAILURE], { response }),
};

export const EDITORS_PICKS = createRequestTypes('EDITORS_PICKS');
export const editorsPicks = {
  request: () => createAction(EDITORS_PICKS[REQUEST]),
  success: response => createAction(EDITORS_PICKS[SUCCESS], { response }),
  failure: response => createAction(EDITORS_PICKS[FAILURE], { response }),
};

export const BORN_TODAY = createRequestTypes('BORN_TODAY');
export const bornToday = {
  request: () => createAction(BORN_TODAY[REQUEST]),
  success: response => createAction(BORN_TODAY[SUCCESS], { response }),
  failure: response => createAction(BORN_TODAY[FAILURE], { response }),
};

export const TOP_NEWS = createRequestTypes('TOP_NEWS');
export const topNews = {
  request: () => createAction(TOP_NEWS[REQUEST]),
  success: response => createAction(TOP_NEWS[SUCCESS], { response }),
  failure: response => createAction(TOP_NEWS[FAILURE], { response }),
};
