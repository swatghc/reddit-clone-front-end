import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import { SignUpRequest, LoginRequest, LogoutRequest } from '../actions/user.actions';

const base_url = 'http://localhost:8080/api';

export const signup = (signupReq: SignUpRequest): any => {
    axios.post(`${base_url}/auth/signup`, signupReq)
    .then((response) => {
        console.log(response);
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

axios.interceptors.response.use(response => {
  return response;
}, (error: AxiosError) => {
  const originalRequest = error.config;
  console.log(error.response);

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

export function refreshToken() {
  const refreshTokenPayload = {
    refreshToken: getJwtToken(),
    username: getUsername(),
  };
  axios.post(`${base_url}/auth/refresh/token`, refreshTokenPayload)
    .then((response) => {
      localStorage.setItem('authenticationToken', response.data.authenticationToken);
      localStorage.setItem('expiresAt', response.data.expiresAt);
      return response;
    })

}

function getJwtToken() {
  return localStorage.getItem('authenticationToken');
}

function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

function getExpirationTime() {
  return localStorage.getItem('expiresAt');
}

function getUsername() {
  return localStorage.getItem('username');
}

export const logout = (logout: LogoutRequest): any => {
    axios.post(`${base_url}/auth/logout`, logout)
    .then((response) => {
        console.log(response);
        localStorage.clear();
    })
    .catch((error) => {
        console.log(error);
    })
}
