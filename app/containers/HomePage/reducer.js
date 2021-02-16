/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SUCCESS, AMOUNT_ROW_ITEMS } from 'utils/constants';
import { CHANGE_USERNAME } from './constants';
import {
  UPCOMING_MOVIES,
  POPULAR_MOVIES,
  FEATURED_TODAY,
  TOP_PICKS,
  WATCHLIST,
  FAN_FAVOURITES,
  MOVE_TO_WATCH,
  IMDB_ORIGINALS,
  EDITORS_PICKS,
  BORN_TODAY,
  TOP_NEWS,
} from './actions';

// The initial state of the App
export const initialState = {
  username: '',
  featuredToday: {},
  topPicks: {},
  watchlist: {},
  fanFavourites: {},
  moveToWatch: {},
  imdbOriginals: {},
  editorsPicks: {},
  bornToday: {},
  topNews: {},
  upcomingMovies: {},
  popularMovies: {},
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;

      case UPCOMING_MOVIES[SUCCESS]:
        reduceFetchUpcomingMovies(action.response, draft);
        break;

      case POPULAR_MOVIES[SUCCESS]:
        reduceFetchPopularMovies(action.response, draft);
        break;

      case FEATURED_TODAY[SUCCESS]:
        reduceFetchFeaturedToday(action.response, draft);
        break;

      case TOP_PICKS[SUCCESS]:
        reduceFetchTopPicks(action.response, draft);
        break;

      case WATCHLIST[SUCCESS]:
        reduceFetchWatchlist(action.response, draft);
        break;

      case FAN_FAVOURITES[SUCCESS]:
        reduceFetchFanFavourites(action.response, draft);
        break;

      case MOVE_TO_WATCH[SUCCESS]:
        reduceFetchMoveToWatch(action.response, draft);
        break;

      case IMDB_ORIGINALS[SUCCESS]:
        reduceFetchImdbOriginals(action.response, draft);
        break;

      case EDITORS_PICKS[SUCCESS]:
        reduceFetchEditorsPicks(action.response, draft);
        break;

      case BORN_TODAY[SUCCESS]:
        reduceFetchBornToday(action.response, draft);
        break;

      case TOP_NEWS[SUCCESS]:
        reduceFetchTopNews(action.response, draft);
        break;
    }
  });

export default homeReducer;

function reduceFetchUpcomingMovies(response, draft) {
  draft.upcomingMovies = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchPopularMovies(response, draft) {
  draft.popularMovies = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchFeaturedToday(response, draft) {
  draft.featuredToday = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchTopPicks(response, draft) {
  draft.topPicks = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchWatchlist(response, draft) {
  draft.watchlist = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchFanFavourites(response, draft) {
  draft.fanFavourites = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchMoveToWatch(response, draft) {
  draft.moveToWatch = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchImdbOriginals(response, draft) {
  draft.imdbOriginals = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchEditorsPicks(response, draft) {
  draft.editorsPicks = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}

function reduceFetchBornToday(response, draft) {
  draft.bornToday = {
    items: response.results.filter((_, idx) => idx < 4),
  };
}

function reduceFetchTopNews(response, draft) {
  draft.topNews = {
    items: response.results.filter((_, idx) => idx < AMOUNT_ROW_ITEMS),
  };
}
