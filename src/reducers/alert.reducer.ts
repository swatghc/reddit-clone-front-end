import {AlertActionTypes, alertConstants, AlertState} from '../actions/alert.action';

const initialState: AlertState = {};

export function alertReducer(state: AlertState = initialState, action: AlertActionTypes): AlertState {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
