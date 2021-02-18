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

const makeSelectSearchKeywords = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.searchKeywords.items,
  );

const makeSelectSearchMovies = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.searchMovies.items,
  );

const makeSelectSearchPeople = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.searchPeople.items,
  );

const makeSelectSearchTvShows = () =>
  createSelector(
    selectSearchPageDomain,
    substate => substate.searchTvShows.items,
  );

export default makeSelectSearchPage;
export {
  makeSelectKeyword,
  makeSelectSearchKeywords,
  makeSelectSearchMovies,
  makeSelectSearchPeople,
  makeSelectSearchTvShows,
  makeSelectLocation,
};
