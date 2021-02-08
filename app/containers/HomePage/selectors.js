/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectPopularMovies = () =>
  createSelector(
    selectHome,
    homeState => homeState.popularMovies.results,
  );

const makeSelectPopularMoviesLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.popularMovies.loading,
  );

const makeSelectPopularMoviesError = () =>
  createSelector(
    selectHome,
    homeState => homeState.popularMovies.error,
  );

export {
  selectHome,
  makeSelectUsername,
  makeSelectPopularMovies,
  makeSelectPopularMoviesLoading,
  makeSelectPopularMoviesError,
};
