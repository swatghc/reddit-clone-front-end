import { combineReducers } from 'redux';
import * as Redux from 'redux';
import { auth } from './../reducers/auth.reducer';
import { registration } from './../reducers/registration.reducer';

const rootReducer = combineReducers({
    auth,
    registration
});

export default rootReducer;