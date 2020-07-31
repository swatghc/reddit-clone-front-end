import { AuthState, UserActionTypes, userConstants } from "../actions/user.actions";

const username = localStorage.getItem('username');

const initialState: AuthState = username? {loggingIn: true, username} : {loggingIn: false, username: ''};

export function auth(state: AuthState = initialState, action: UserActionTypes): AuthState {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return { loggingIn: true, username: action.payload.username };

        case userConstants.LOGIN_SUCCESS:
            return  { loggingIn: true, username: action.payload.username };

        case userConstants.LOGIN_FAILURE:
            return  { loggingIn: false, username: '' };
        default:
            return state;
    }
}
