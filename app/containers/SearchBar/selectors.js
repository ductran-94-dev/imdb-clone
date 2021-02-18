import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchBar state domain
 */

const selectSearchBarDomain = state => state.searchBar || initialState;
const selectRouter = state => state.router;

/**
 * Other specific selectors
 */

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

/**
 * Default selector used by SearchBar
 */

const makeSelectSearchBar = () =>
  createSelector(
    selectSearchBarDomain,
    substate => substate,
  );

export default makeSelectSearchBar;
export { makeSelectLocation };
