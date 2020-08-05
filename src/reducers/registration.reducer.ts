import { RegisterState, userConstants } from "../actions/user.actions";
import {RegisterActionType} from '../actions/register.action';

const initialState: RegisterState = {registering: false, success: false};

export function registrationReducer(state: RegisterState = initialState, action: RegisterActionType): RegisterState {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {registering: true, success: false};
        case userConstants.REGISTER_SUCCESS:
            return {registering: false, success: true};
        case userConstants.REGISTER_FAILURE:
            return {registering: false, success: false};
        default:
            return state;
    }
}
