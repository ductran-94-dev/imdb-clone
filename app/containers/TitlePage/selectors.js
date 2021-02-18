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

const makeSelectRecentlyViewed = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.recentlyViewed.items,
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

const makeSelectMovieVideos = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleVideos.items,
  );

const makeSelectMovieCast = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleCast.items,
  );

const makeSelectMovieCrew = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleCrew.items,
  );

const makeSelectMovieSimilar = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleSimilar.items,
  );

const makeSelectMovieReviews = () =>
  createSelector(
    selectTitlePageDomain,
    titleState => titleState.titleReviews.items,
  );

export default makeSelectTitlePage;
export {
  makeSelectMovieId,
  makeSelectMovieDetails,
  makeSelectMoviePhotos,
  makeSelectMovieVideos,
  makeSelectMovieCast,
  makeSelectMovieCrew,
  makeSelectMovieSimilar,
  makeSelectMovieReviews,
  makeSelectLocation,
  makeSelectRecentlyViewed,
};
