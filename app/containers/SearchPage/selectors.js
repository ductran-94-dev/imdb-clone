import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchPage state domain
 */

const selectSearchPageDomain = state => state.searchPage || initialState;
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
 * Default selector used by SearchPage
 */

const makeSelectSearchPage = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate,
  );

const makeSelectKeyword = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.keyword,
  );

const makeSelectAsyncSearchKeywords = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.searchKeywords,
  );

const makeSelectAsyncSearchMovies = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.searchMovies,
  );

const makeSelectAsyncSearchPeople = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.searchPeople,
  );

const makeSelectAsyncSearchTvShows = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.searchTvShows,
  );

export default makeSelectSearchPage;
export {
  makeSelectKeyword,
  makeSelectAsyncSearchKeywords,
  makeSelectAsyncSearchMovies,
  makeSelectAsyncSearchPeople,
  makeSelectAsyncSearchTvShows,
  makeSelectLocation,
};
