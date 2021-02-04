// CONSTANTS
const SET_IS_AUTHENTICATED = 'set_is_authenticated';
const GET_IS_AUTHENTICATED = 'get_is_authenticated'

// initial state
const initialState = {
	isAuthenticated: localStorage.getItem('token') !== null,
};

// reducers
export const authenticated = (state = initialState, {type, payload}) => {
	switch (type) {
		case SET_IS_AUTHENTICATED:
			return {
				...state,
				isAuthenticated: true,
			};
		case GET_IS_AUTHENTICATED:
			return {
				isAuthenticated: [...state.isAuthenticated]
			}
		default:
			return state;
	}
};

// actions
export const setIsAuthenticated = (payload) => ({
	type: SET_IS_AUTHENTICATED,
	payload: payload
});
