/*
 *
 * SearchPage actions
 *
 */

import { createAction, createRequestTypes } from 'utils/actionCreator';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';

export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';
export const changeKeyword = keyword =>
  createAction(CHANGE_KEYWORD, { keyword });

export const SEARCH_MOVIES = createRequestTypes('SEARCH_MOVIES');
export const searchMovies = {
  request: () => createAction(SEARCH_MOVIES[REQUEST]),
  success: response => createAction(SEARCH_MOVIES[SUCCESS], { response }),
  failure: response => createAction(SEARCH_MOVIES[FAILURE], { response }),
};

export const SEARCH_PEOPLE = createRequestTypes('SEARCH_PEOPLE');
export const searchPeople = {
  request: () => createAction(SEARCH_PEOPLE[REQUEST]),
  success: response => createAction(SEARCH_PEOPLE[SUCCESS], { response }),
  failure: response => createAction(SEARCH_PEOPLE[FAILURE], { response }),
};

export const SEARCH_TV_SHOWS = createRequestTypes('SEARCH_TV_SHOWS');
export const searchTvShows = {
  request: () => createAction(SEARCH_TV_SHOWS[REQUEST]),
  success: response => createAction(SEARCH_TV_SHOWS[SUCCESS], { response }),
  failure: response => createAction(SEARCH_TV_SHOWS[FAILURE], { response }),
};

export const SEARCH_KEYWORDS = createRequestTypes('SEARCH_KEYWORDS');
export const searchKeywords = {
  request: () => createAction(SEARCH_KEYWORDS[REQUEST]),
  success: response => createAction(SEARCH_KEYWORDS[SUCCESS], { response }),
  failure: response => createAction(SEARCH_KEYWORDS[FAILURE], { response }),
};
