import { AuthState, UserActionTypes, userConstants } from "../actions/user.actions";


const initialState: AuthState = {loggingIn: false, username: '', authenticated: false};

export function authReducer(state: AuthState = initialState, action: UserActionTypes): AuthState {

    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return { loggingIn: true, username: action.payload.username, authenticated: false };

        case userConstants.LOGIN_SUCCESS:
            return  { loggingIn: true, username: action.payload.username, authenticated: true };

        case userConstants.LOGIN_FAILURE:
            return  { loggingIn: false, username: '', authenticated: false };

        case userConstants.RENEW_REQUEST:
            return  { loggingIn: true, username: action.payload.username, authenticated: false};

        case userConstants.RENEW_SUCCESS:
            return  { loggingIn: true, username: action.payload.username, authenticated: true };

        case userConstants.RENEW_FAILURE:
            return  { loggingIn: true, username: '', authenticated: false };
        default:
            return state;
    }
}
