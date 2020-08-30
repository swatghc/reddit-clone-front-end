import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {SignUpRequest, LoginRequest, LogoutRequest, RenewTokenRequest} from '../actions/user.actions';
import {Dispatch} from 'react';
import {clearAlert, errorAlert, successAlert} from '../actions/alert.action';

const base_url = 'http://localhost:8080/api';

export const signupAsync = (signupReq: SignUpRequest): any => {
    return axios.post(`${base_url}/auth/signup`, signupReq)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        console.log(error);
    })
};

axios.interceptors.request.use(function (config: AxiosRequestConfig) {
  // Do something before request is sent
  if (getJwtToken()) {
    config.headers = {Authorization: 'Bearer ' + getJwtToken()};
  }
  return config;
}, (error: any) => {
  return Promise.reject(error)
});

// https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da
axios.interceptors.response.use(response => {
  return response;
}, (error: any) => {
  const originalRequest = error.config;
  console.log(error.response);
  if (error.response.status === 403
    && !originalRequest.url.includes('api/auth/login')
    && !originalRequest.url.includes('api/auth/refresh/token')
    && !originalRequest._retry) {
    originalRequest._retry = true;
    const req: RenewTokenRequest = {
      refreshToken: getRefreshToken() || '',
      username: getUsername() || '',
    };

    refreshToken(req).then(res => {
        return axios(originalRequest);
      }
    )
  }
  return Promise.reject(error);
});

export const loginAsync = (loginReq: LoginRequest): any => {
    return axios.post(`${base_url}/auth/login`, loginReq)
      .then((response: any) => {
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('authenticationToken', response.data.authenticationToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('expiresAt', response.data.expiresAt);
        return response
      })
};

export function refreshToken(refreshTokenPayload: RenewTokenRequest): Promise<any> {
  return axios.post(`${base_url}/auth/refresh/token`, refreshTokenPayload)
    .then((response) => {
      localStorage.setItem('authenticationToken', response.data.authenticationToken);
      localStorage.setItem('expiresAt', response.data.expiresAt);
      return response;
    })
}

export function getJwtToken() {
  return localStorage.getItem('authenticationToken');
}

export function getAuthStatus() {
  return !!getJwtToken();
}

export function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

function getExpirationTime() {
  return localStorage.getItem('expiresAt');
}

export function getUsername() {
  return localStorage.getItem('username');
}

export const logout = (dispatch: Dispatch<any>, logout: LogoutRequest): any => {
    return axios.post(`${base_url}/auth/logout`, logout)
    .then((response) => {
      dispatch(successAlert(`Logout  success!`));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000);
      localStorage.clear();
      return response;
    })
    .catch((error) => {
      console.log(error);
      dispatch(errorAlert(error.message));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000)    })
};
