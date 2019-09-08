import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import reducer from './reducers/index';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const loggerMiddleware = createLogger();

export const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware, middleware)
);
