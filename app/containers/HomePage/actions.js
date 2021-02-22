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
  createAction,
  createAsyncAction,
  createRequestTypes,
} from 'utils/actionCreator';
import { CHANGE_USERNAME } from './constants';

export const changeUsername = username =>
  createAction(CHANGE_USERNAME, { username });

export const POPULAR_MOVIES = createRequestTypes('POPULAR_MOVIES');
export const popularMovies = createAsyncAction(POPULAR_MOVIES);

export const UPCOMING_MOVIES = createRequestTypes('UPCOMING_MOVIES');
export const upcomingMovies = createAsyncAction(UPCOMING_MOVIES);

export const FEATURED_TODAY = createRequestTypes('FEATURED_TODAY');
export const featuredToday = createAsyncAction(FEATURED_TODAY);

export const TOP_PICKS = createRequestTypes('TOP_PICKS');
export const topPicks = createAsyncAction(TOP_PICKS);

export const WATCHLIST = createRequestTypes('WATCHLIST');
export const watchlist = createAsyncAction(WATCHLIST);

export const FAN_FAVOURITES = createRequestTypes('FAN_FAVOURITES');
export const fanFavourites = createAsyncAction(FAN_FAVOURITES);

export const MOVE_TO_WATCH = createRequestTypes('MOVE_TO_WATCH');
export const moveToWatch = createAsyncAction(MOVE_TO_WATCH);

export const IMDB_ORIGINALS = createRequestTypes('IMDB_ORIGINALS');
export const imdbOriginals = createAsyncAction(IMDB_ORIGINALS);

export const EDITORS_PICKS = createRequestTypes('EDITORS_PICKS');
export const editorsPicks = createAsyncAction(EDITORS_PICKS);

export const BORN_TODAY = createRequestTypes('BORN_TODAY');
export const bornToday = createAsyncAction(BORN_TODAY);

export const TOP_NEWS = createRequestTypes('TOP_NEWS');
export const topNews = createAsyncAction(TOP_NEWS);
