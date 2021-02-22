/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { AMOUNT_ROW_ITEMS, SUCCESS, REQUEST, FAILURE } from 'utils/constants';
import { RECENTLY_VIEWED } from './actions';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  recentlyViewed: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case RECENTLY_VIEWED[REQUEST]:
        draft.recentlyViewed.loading = true;
        break;

      case RECENTLY_VIEWED[SUCCESS]:
        draft.recentlyViewed.loading = false;
        reduceFetchRecentlyViewed(action.response, draft);
        break;

      case RECENTLY_VIEWED[FAILURE]:
        draft.recentlyViewed.loading = false;
        draft.recentlyViewed.error = action.response;
        break;
    }
  });

export default appReducer;

function reduceFetchRecentlyViewed(response, draft) {
  draft.recentlyViewed.items = response.results.filter(
    (_, idx) => idx < AMOUNT_ROW_ITEMS,
  );
}
