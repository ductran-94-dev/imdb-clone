/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { AMOUNT_ROW_ITEMS, FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import {
  BORN_TODAY,
  EDITORS_PICKS,
  FAN_FAVOURITES,
  FEATURED_TODAY,
  IMDB_ORIGINALS,
  MOVE_TO_WATCH,
  POPULAR_MOVIES,
  TOP_NEWS,
  TOP_PICKS,
  UPCOMING_MOVIES,
  WATCHLIST,
} from './actions';
import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  featuredToday: {
    loading: false,
    error: false,
    items: false,
  },
  topPicks: {
    loading: false,
    error: false,
    items: false,
  },
  watchlist: {
    loading: false,
    error: false,
    items: false,
  },
  fanFavourites: {
    loading: false,
    error: false,
    items: false,
  },
  moveToWatch: {
    loading: false,
    error: false,
    items: false,
  },
  imdbOriginals: {
    loading: false,
    error: false,
    items: false,
  },
  editorsPicks: {
    loading: false,
    error: false,
    items: false,
  },
  bornToday: {
    loading: false,
    error: false,
    items: false,
  },
  topNews: {
    loading: false,
    error: false,
    items: false,
  },
  upcomingMovies: {
    loading: false,
    error: false,
    items: false,
  },
  popularMovies: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;

      case UPCOMING_MOVIES[REQUEST]:
        draft.upcomingMovies.loading = true;
        break;

      case UPCOMING_MOVIES[SUCCESS]:
        draft.upcomingMovies.loading = false;
        reduceFetchUpcomingMovies(action.response, draft);
        break;

      case UPCOMING_MOVIES[FAILURE]:
        draft.upcomingMovies.loading = false;
        draft.upcomingMovies.error = action.response;
        break;

      case POPULAR_MOVIES[REQUEST]:
        draft.popularMovies.loading = true;
        break;

      case POPULAR_MOVIES[SUCCESS]:
        draft.popularMovies.loading = false;
        reduceFetchPopularMovies(action.response, draft);
        break;

      case POPULAR_MOVIES[FAILURE]:
        draft.popularMovies.loading = false;
        draft.popularMovies.error = action.response;
        break;

      case FEATURED_TODAY[REQUEST]:
        draft.featuredToday.loading = true;
        break;

      case FEATURED_TODAY[SUCCESS]:
        draft.featuredToday.loading = false;
        reduceFetchFeaturedToday(action.response, draft);
        break;

      case FEATURED_TODAY[FAILURE]:
        draft.featuredToday.loading = false;
        draft.featuredToday.error = action.response;
        break;

      case TOP_PICKS[REQUEST]:
        draft.topPicks.loading = true;
        break;

      case TOP_PICKS[SUCCESS]:
        draft.topPicks.loading = false;
        reduceFetchTopPicks(action.response, draft);
        break;

      case TOP_PICKS[FAILURE]:
        draft.topPicks.loading = false;
        draft.topPicks.error = action.response;
        break;

      case WATCHLIST[REQUEST]:
        draft.watchlist.loading = true;
        break;

      case WATCHLIST[SUCCESS]:
        draft.watchlist.loading = false;
        reduceFetchWatchlist(action.response, draft);
        break;

      case WATCHLIST[FAILURE]:
        draft.watchlist.loading = false;
        draft.watchlist.error = action.response;
        break;

      case FAN_FAVOURITES[REQUEST]:
        draft.fanFavourites.loading = true;
        break;

      case FAN_FAVOURITES[SUCCESS]:
        draft.fanFavourites.loading = false;
        reduceFetchFanFavourites(action.response, draft);
        break;

      case FAN_FAVOURITES[FAILURE]:
        draft.fanFavourites.loading = false;
        draft.fanFavourites.error = action.response;
        break;

      case MOVE_TO_WATCH[REQUEST]:
        draft.moveToWatch.loading = true;
        break;

      case MOVE_TO_WATCH[SUCCESS]:
        draft.moveToWatch.loading = false;
        reduceFetchMoveToWatch(action.response, draft);
        break;

      case MOVE_TO_WATCH[FAILURE]:
        draft.moveToWatch.loading = false;
        draft.moveToWatch.error = action.response;
        break;

      case IMDB_ORIGINALS[REQUEST]:
        draft.imdbOriginals.loading = true;
        break;

      case IMDB_ORIGINALS[SUCCESS]:
        draft.imdbOriginals.loading = false;
        reduceFetchImdbOriginals(action.response, draft);
        break;

      case IMDB_ORIGINALS[FAILURE]:
        draft.imdbOriginals.loading = false;
        draft.imdbOriginals.error = action.response;
        break;

      case EDITORS_PICKS[REQUEST]:
        draft.editorsPicks.loading = true;
        break;

      case EDITORS_PICKS[SUCCESS]:
        draft.editorsPicks.loading = false;
        reduceFetchEditorsPicks(action.response, draft);
        break;

      case EDITORS_PICKS[FAILURE]:
        draft.editorsPicks.loading = false;
        draft.editorsPicks.error = action.response;
        break;

      case BORN_TODAY[REQUEST]:
        draft.bornToday.loading = true;
        break;

      case BORN_TODAY[SUCCESS]:
        draft.bornToday.loading = false;
        reduceFetchBornToday(action.response, draft);
        break;

      case BORN_TODAY[FAILURE]:
        draft.bornToday.loading = false;
        draft.bornToday.error = action.response;
        break;

      case TOP_NEWS[REQUEST]:
        draft.topNews.loading = true;
        break;

      case TOP_NEWS[SUCCESS]:
        draft.topNews.loading = false;
        reduceFetchTopNews(action.response, draft);
        break;

      case TOP_NEWS[FAILURE]:
        draft.topNews.loading = false;
        draft.topNews.error = action.response;
        break;
    }
  });

export default homeReducer;

function reduceFetchUpcomingMovies(response, draft) {
  draft.upcomingMovies.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchPopularMovies(response, draft) {
  draft.popularMovies.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchFeaturedToday(response, draft) {
  draft.featuredToday.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchTopPicks(response, draft) {
  draft.topPicks.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchWatchlist(response, draft) {
  draft.watchlist.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchFanFavourites(response, draft) {
  draft.fanFavourites.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchMoveToWatch(response, draft) {
  draft.moveToWatch.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchImdbOriginals(response, draft) {
  draft.imdbOriginals.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchEditorsPicks(response, draft) {
  draft.editorsPicks.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}

function reduceFetchBornToday(response, draft) {
  draft.bornToday.items = response.results.filter((_, idx) => idx < 4);
}

function reduceFetchTopNews(response, draft) {
  draft.topNews.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}
