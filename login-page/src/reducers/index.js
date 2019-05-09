// Import Actions

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

// Set Initial State

const initialState = {
    loggingIn: false,
    loggedIn: false,
    logInError: null,
    users: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                loggingIn: true,
                loggedIn: false,
                logInError: null
            }

        case LOGIN_SUCCESS:
            return {
                loggingIn: false,
                loggedIn: true,
                logInError: null
            }

        case LOGIN_FAILURE:
            return {
                loggingIn: false,
                loggedIn: false,
                logInError: action.payload
            }
        default:
            return state;
    }
}

export default reducer;