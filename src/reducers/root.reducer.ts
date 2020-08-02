import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { registrationReducer } from './registration.reducer';
import { alertReducer } from './alert.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    alert: alertReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
