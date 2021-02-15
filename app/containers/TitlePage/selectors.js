import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the titlePage state domain
 */

const selectTitlePageDomain = state => state.titlePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TitlePage
 */

const makeSelectTitlePage = () =>
  createSelector(
    selectTitlePageDomain,
    substate => substate,
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
  makeSelectMovieDetails,
  makeSelectMoviePhotos,
  makeSelectMovieVideos,
  makeSelectMovieCast,
  makeSelectMovieSimilar,
  makeSelectMovieReviews,
};
