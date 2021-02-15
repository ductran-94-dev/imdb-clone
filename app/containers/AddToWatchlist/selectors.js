import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addToWatchlist state domain
 */

const selectAddToWatchlistDomain = state =>
  state.addToWatchlist || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddToWatchlist
 */

const makeSelectAddToWatchlist = () =>
  createSelector(
    selectAddToWatchlistDomain,
    substate => substate,
  );

export default makeSelectAddToWatchlist;
export { selectAddToWatchlistDomain };
