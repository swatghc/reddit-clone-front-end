export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';
export const LOG_OUT = 'LOG_OUT';



export interface LoginAction {
    type: typeof LOGIN;
    payload: LoginRequest;
}

export interface SignupAction {
    type: typeof SIGN_UP;
    payload: LoginRequest;
}

export interface LogoutAction {
    type: typeof LOG_OUT;
    payload: LoginRequest;
}


export function login(loginRequest: LoginRequest): LoginAction {
    return {
        type: LOGIN,
        payload: loginRequest
    };
}

export function Signup(signupReq: SignUpRequest): SignupAction {
    return {
        type: SIGN_UP,
        payload: signupReq
    };
}
 


export interface LogoutRequest { 
    refreshToken: string;
    username: string;
}


export interface LoginRequest {
    username: string;
    password: string;
}

export interface SignUpRequest {
    username: string;
    email: string;
    password: string;
}
