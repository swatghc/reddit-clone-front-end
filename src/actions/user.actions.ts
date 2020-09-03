import { Dispatch } from 'redux';
import {loginAsync, getUsername, refreshToken, getRefreshToken} from '../services/user.service';
import {clearAlert, errorAlert, successAlert} from './alert.action';

export const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

    LOGOUT: 'USERS_LOGOUT',

    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE',

    RENEW_REQUEST: 'USERS_RENEW_REQUEST',
    RENEW_SUCCESS: 'USERS_RENEW_SUCCESS',
    RENEW_FAILURE: 'USERS_RENEW_FAILURE',
};

export interface RegisterState {
    registering?: boolean;
    success?: boolean;
}

export interface AuthState {
    loggingIn: boolean;
    username: string;
    authenticated: boolean;
}

export interface User {
    username: string;
}


interface LoginRequestAction {
    type: typeof userConstants.LOGIN_REQUEST;
    payload: User;
}

interface LoginSuccessAction {
    type: typeof userConstants.LOGIN_SUCCESS;
    payload: User;
}

interface LoginFailedAction {
    type: typeof userConstants.LOGIN_FAILURE;
    payload: User;
}

interface RenewRequestAction {
    type: typeof userConstants.RENEW_REQUEST;
    payload: RenewTokenRequest;
}

interface RenewSuccessAction {
    type: typeof userConstants.RENEW_SUCCESS;
    payload: RenewTokenRequest;
}

interface RenewFailedAction {
    type: typeof userConstants.RENEW_FAILURE;
    payload: RenewTokenRequest;
}


interface LogoutAction {
    type: typeof userConstants.LOGIN_REQUEST;
    payload: LogoutRequest;
}

export type UserActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailedAction | RenewRequestAction
  | RenewSuccessAction | RenewFailedAction | LogoutAction;

// action creator
export function loginRequest(user: User): LoginRequestAction {
    return {
        type: userConstants.LOGIN_REQUEST,
        payload: user
    };
}

// action creator
export function loginSuccess(user: User): LoginSuccessAction {
    return {
        type: userConstants.LOGIN_SUCCESS,
        payload: user
    };
}

// action creator
export function loginFail(user: User): LoginFailedAction {
    return {
        type: userConstants.LOGIN_FAILURE,
        payload: user
    };
}

// action creator
export function renewRequest(req: RenewTokenRequest): RenewRequestAction {
    return {
        type: userConstants.RENEW_REQUEST,
        payload: req
    };
}

// action creator
export function renewSuccess(req: RenewTokenRequest): RenewSuccessAction {
    return {
        type: userConstants.RENEW_SUCCESS,
        payload: req
    };
}

// action creator
export function renewFail(req: RenewTokenRequest): RenewFailedAction {
    return {
        type: userConstants.RENEW_FAILURE,
        payload: req
    };
}



// dispatch action
export function login(dispatch: Dispatch<any>, req: LoginRequest): any {
    dispatch(loginRequest({ username: req.username }));
    return loginAsync(req).then(
        (response: any) => {
            console.log(response);
            dispatch(loginSuccess({ username: response.data.username }));
            dispatch(successAlert('Login Success'));
            setTimeout(() => {
              dispatch(clearAlert(''))
            }, 3000)
        },
        (error: any) => {
          console.log(error.message);
          dispatch(errorAlert(error.message));
          dispatch(loginFail({username: JSON.stringify(error)}));
          setTimeout(() => {
            dispatch(clearAlert(''))
          }, 3000)
        });
}

// dispatch renew token function
export function renewToken(dispatch: Dispatch<any>): any {
    const req: RenewTokenRequest = {
        refreshToken: getRefreshToken() || '',
        username: getUsername() || '',
    };
    dispatch(renewRequest(req));
    return refreshToken(req).then(
      (response: any) => {
          console.log(response);
          dispatch(renewSuccess(req));
      },
      (error: any) => {
          console.log(error);
          dispatch(errorAlert('Token Expired!'));
          dispatch(renewFail(req));
          localStorage.clear();
          setTimeout(() => {
              dispatch(clearAlert(''))
          }, 3000)
      }
    )
}

export interface LogoutRequest {
    refreshToken: string;
    username: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface RenewTokenRequest {
    username: string;
    refreshToken: string;
}

export interface SignUpRequest {
    username: string;
    email: string;
    password: string;
}
