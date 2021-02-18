/*
 *
 * SearchPage reducer
 *
 */
import produce from 'immer';
import { SUCCESS } from 'utils/constants';
import {
  CHANGE_KEYWORD,
  SEARCH_KEYWORDS,
  SEARCH_MOVIES,
  SEARCH_PEOPLE,
  SEARCH_TV_SHOWS,
} from './actions';

export const initialState = {
  keyword: false,
  searchKeywords: {},
  searchMovies: {},
  searchPeople: {},
  searchTvShows: {},
};

/* eslint-disable default-case, no-param-reassign */
const searchPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_KEYWORD:
        draft.keyword = action.keyword;
        break;

      case SEARCH_KEYWORDS[SUCCESS]:
        reduceSearchKeywords(action.response, draft);
        break;

      case SEARCH_MOVIES[SUCCESS]:
        reduceSearchMovies(action.response, draft);
        break;

      case SEARCH_PEOPLE[SUCCESS]:
        reduceSearchPeople(action.response, draft);
        break;

      case SEARCH_TV_SHOWS[SUCCESS]:
        reduceSearchTvShows(action.response, draft);
        break;
    }
  });

export default searchPageReducer;

function reduceSearchKeywords(response, draft) {
  draft.searchKeywords = {
    items: response.results.filter((_, idx) => idx < 6),
  };
}

function reduceSearchMovies(response, draft) {
  draft.searchMovies = {
    items: response.results.filter((_, idx) => idx < 6),
  };
}

function reduceSearchPeople(response, draft) {
  draft.searchPeople = {
    items: response.results.filter((_, idx) => idx < 6),
  };
}

function reduceSearchTvShows(response, draft) {
  draft.searchTvShows = {
    items: response.results.filter((_, idx) => idx < 6),
  };
}
