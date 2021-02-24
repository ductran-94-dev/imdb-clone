/*
 *
 * SearchPage actions
 *
 */

import {
  createAction,
  createAsyncAction,
  createRequestTypes,
} from 'utils/reduxHelpers';

export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';
export const changeKeyword = keyword =>
  createAction(CHANGE_KEYWORD, { keyword });

export const SEARCH_MOVIES = createRequestTypes('SEARCH_MOVIES');
export const searchMovies = createAsyncAction(SEARCH_MOVIES);

export const SEARCH_PEOPLE = createRequestTypes('SEARCH_PEOPLE');
export const searchPeople = createAsyncAction(SEARCH_PEOPLE);

export const SEARCH_TV_SHOWS = createRequestTypes('SEARCH_TV_SHOWS');
export const searchTvShows = createAsyncAction(SEARCH_TV_SHOWS);

export const SEARCH_KEYWORDS = createRequestTypes('SEARCH_KEYWORDS');
export const searchKeywords = createAsyncAction(SEARCH_KEYWORDS);
