import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

// * LIST OF REDUCERS
import {authenticated} from "./authenticated";

const createReducer = (history) => combineReducers({
	router: connectRouter(history),
	authenticated
});

export default createReducer;
