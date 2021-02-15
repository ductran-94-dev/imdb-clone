/*
 *
 * TitlePage reducer
 *
 */
import produce from 'immer';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const titlePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case 'default':
        break;
    }
  });

export default titlePageReducer;
