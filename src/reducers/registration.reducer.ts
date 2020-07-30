import { UserActionTypes, RegisterState, userConstants } from "../actions/user.actions";

const initialState: RegisterState = {registering: false}

export function registration(state = initialState, action: UserActionTypes): RegisterState {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {registering: true}
        case userConstants.REGISTER_SUCCESS:
            return {registering: false};
        case userConstants.REGISTER_FAILURE:
            return {registering: false};
        default:
            return state;
    }
}