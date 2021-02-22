import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the titlePage state domain
 */

const selectTitlePageDomain = state => state.titlePage || initialState;
const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

/**
 * Other specific selectors
 */

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectAsyncRecentlyViewed = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.recentlyViewed,
  );

/**
 * Default selector used by TitlePage
 */

const makeSelectTitlePage = () =>
  createSelector(
    selectTitlePageDomain,
    substate => substate,
  );

const makeSelectMovieId = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleId,
  );

const makeSelectMovieDetails = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleDetails.item,
  );

const makeSelectMoviePhotos = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titlePhotos.items,
  );

const makeSelectAsyncMovieVideos = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleVideos,
  );

const makeSelectAsyncMovieCast = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleCast,
  );

const makeSelectMovieCrew = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleCrew.items,
  );

const makeSelectAsyncMovieSimilar = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleSimilar,
  );

const makeSelectAsyncMovieReviews = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleReviews,
  );

export default makeSelectTitlePage;
export {
  makeSelectMovieId,
  makeSelectMovieDetails,
  makeSelectMoviePhotos,
  makeSelectAsyncMovieVideos,
  makeSelectAsyncMovieCast,
  makeSelectMovieCrew,
  makeSelectAsyncMovieSimilar,
  makeSelectAsyncMovieReviews,
  makeSelectLocation,
  makeSelectAsyncRecentlyViewed,
};
