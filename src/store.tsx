import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import * as Redux from 'redux';
import rootReducer from './reducers/root.reducer';

const loggerMiddleware: Redux.Middleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware)
);
