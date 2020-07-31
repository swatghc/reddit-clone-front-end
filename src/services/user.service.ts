import axios from 'axios';
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
}


export const loginAsync = (loginReq: LoginRequest): any => {
    return axios.post(`${base_url}/auth/login`, loginReq)
      .then((response: any) => {
        return response
      })
    // .then((response: any) => {
    //     console.log(response);
    //     localStorage.setItem('username', response.username);
    //     localStorage.setItem('authenticationToken', response.authenticationToken);
    //     localStorage.setItem('refreshToken', response.refreshToken);
    // })
    // .catch((error) => {
    //     console.log(error);
    // })
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
