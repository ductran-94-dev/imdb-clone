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

export default makeSelectTitlePage;
export { selectTitlePageDomain };
