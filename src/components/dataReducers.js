import { types } from './dataActions';

export function data (state = null, action) {
  switch (action.type) {
    case types.SET_DATA:
      return action.payload;
    default:
      return state;
  }
}