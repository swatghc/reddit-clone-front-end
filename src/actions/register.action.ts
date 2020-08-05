import { SignUpRequest, userConstants } from './user.actions';
import {Dispatch} from 'react';
import {signupAsync} from '../services/user.service';
import {clearAlert, errorAlert, successAlert} from './alert.action';

interface RegisterRequestAction {
  type: typeof userConstants.REGISTER_REQUEST;
  payload: SignUpRequest;
}

interface RegisterSuccessAction {
  type: typeof userConstants.REGISTER_SUCCESS;
  payload: SignUpRequest;
}

interface RegisterFailedAction {
  type: typeof userConstants.REGISTER_FAILURE;
  payload: SignUpRequest;
}

export type RegisterActionType = RegisterRequestAction | RegisterSuccessAction | RegisterFailedAction;

// action creator
export function registerRequest(req: SignUpRequest): RegisterRequestAction {
  return {
    type: userConstants.REGISTER_REQUEST,
    payload: req
  };
}

// action creator
export function registerSuccess(req: SignUpRequest): RegisterSuccessAction {
  return {
    type: userConstants.REGISTER_SUCCESS,
    payload: req
  };
}

// action creator
export function registerFail(req: SignUpRequest): RegisterFailedAction {
  return {
    type: userConstants.REGISTER_FAILURE,
    payload: req
  };
}

export function register(dispatch: Dispatch<any>, req: SignUpRequest): any {
  dispatch(registerRequest(req));
  return signupAsync(req).then(
    (response: any) => {
      dispatch(registerSuccess(req));
      dispatch(successAlert('Login Success, please check your inbox for activation email'));
      setTimeout(() => {
        dispatch(clearAlert(''));
      }, 3000)
    },
    (error: any) => {
      console.log(error.message);
      dispatch(errorAlert(error.message));
      dispatch(registerFail(req));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000)
    }
  )
}
