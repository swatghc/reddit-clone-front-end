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


export const login = (loginReq: LoginRequest): any => {
    axios.post(`${base_url}/auth/login`, loginReq)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}

export const logout = (logout: LogoutRequest): any => {
    axios.post(`${base_url}/auth/logout`, logout)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
} 