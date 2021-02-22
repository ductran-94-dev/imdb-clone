/*
 *
 * SearchPage reducer
 *
 */
import produce from 'immer';
import { SUCCESS, REQUEST, FAILURE } from 'utils/constants';
import {
  CHANGE_KEYWORD,
  SEARCH_KEYWORDS,
  SEARCH_MOVIES,
  SEARCH_PEOPLE,
  SEARCH_TV_SHOWS,
} from './actions';

export const initialState = {
  keyword: false,
  searchKeywords: {
    loading: false,
    error: false,
    items: false,
  },
  searchMovies: {
    loading: false,
    error: false,
    items: false,
  },
  searchPeople: {
    loading: false,
    error: false,
    items: false,
  },
  searchTvShows: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const searchPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_KEYWORD:
        draft.keyword = action.keyword;
        break;

      case SEARCH_KEYWORDS[REQUEST]:
        draft.searchKeywords.loading = true;
        break;

      case SEARCH_KEYWORDS[SUCCESS]:
        draft.searchKeywords.loading = false;
        reduceSearchKeywords(action.response, draft);
        break;

      case SEARCH_KEYWORDS[FAILURE]:
        draft.searchKeywords.loading = false;
        draft.searchKeywords.error = action.response;
        break;

      case SEARCH_MOVIES[REQUEST]:
        draft.searchMovies.loading = true;
        break;

      case SEARCH_MOVIES[SUCCESS]:
        draft.searchMovies.loading = false;
        reduceSearchMovies(action.response, draft);
        break;

      case SEARCH_MOVIES[FAILURE]:
        draft.searchMovies.loading = false;
        draft.searchMovies.error = action.response;
        break;

      case SEARCH_PEOPLE[REQUEST]:
        draft.searchPeople.loading = true;
        break;

      case SEARCH_PEOPLE[SUCCESS]:
        draft.searchPeople.loading = false;
        reduceSearchPeople(action.response, draft);
        break;

      case SEARCH_PEOPLE[FAILURE]:
        draft.searchPeople.loading = false;
        draft.searchPeople.error = action.response;
        break;

      case SEARCH_TV_SHOWS[REQUEST]:
        draft.searchTvShows.loading = true;
        break;

      case SEARCH_TV_SHOWS[SUCCESS]:
        draft.searchTvShows.loading = false;
        reduceSearchTvShows(action.response, draft);
        break;

      case SEARCH_TV_SHOWS[FAILURE]:
        draft.searchTvShows.loading = false;
        draft.searchTvShows.error = action.response;
        break;
    }
  });

export default searchPageReducer;

function reduceSearchKeywords(response, draft) {
  draft.searchKeywords.items = response.results.filter((_, idx) => idx < 12);
}

function reduceSearchMovies(response, draft) {
  draft.searchMovies.items = response.results.filter((_, idx) => idx < 12);
}

function reduceSearchPeople(response, draft) {
  draft.searchPeople.items = response.results.filter((_, idx) => idx < 12);
}

function reduceSearchTvShows(response, draft) {
  draft.searchTvShows.items = response.results.filter((_, idx) => idx < 12);
}
