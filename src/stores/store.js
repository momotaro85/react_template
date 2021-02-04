import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import createReducer from './reducers';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export const configureStore = (initialState = {}) => {
	const middlewares = [thunk, routerMiddleware(history)];
	const enhancers = [applyMiddleware(...middlewares)];

	const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

	return createStore(
		createReducer(history),
		initialState,
		composeEnhancers(...enhancers)
	);
}
