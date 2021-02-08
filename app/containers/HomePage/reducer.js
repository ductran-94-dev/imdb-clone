/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  LOAD_POPULAR_MOVIES,
  LOAD_POPULAR_MOVIES_SUCCESS,
  LOAD_POPULAR_MOVIES_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  popularMovies: {
    results: false,
    loading: false,
    error: false,
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

      case LOAD_POPULAR_MOVIES:
        draft.popularMovies.loading = true;
        draft.popularMovies.error = false;
        draft.popularMovies.results = false;
        break;

      case LOAD_POPULAR_MOVIES_SUCCESS:
        draft.popularMovies.results = action.movies;
        draft.popularMovies.loading = false;
        break;

      case LOAD_POPULAR_MOVIES_ERROR:
        draft.popularMovies.error = action.error;
        draft.popularMovies.loading = false;
        break;
    }
  });

export default homeReducer;
