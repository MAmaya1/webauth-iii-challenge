// Import Actions

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE
} from '../actions';

// Set Initial State

const initialState = {
    loggingIn: false,
    loggedIn: false,
    logInError: null,
    users: [],
    loadingUsers: false,
    loadingUsersError: null,
    addingUser: false,
    userAdded: false,
    addUserFailure: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                loggedIn: false,
                logInError: null
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                logInError: null
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                logInError: action.payload
            }

        case GET_USERS_START:
            return {
                ...state,
                loadingUsers: true,
                loadingUsersError: null
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                loadingUsers: false,
                loadingUsersError: null,
                users: action.payload
            }

        case GET_USERS_FAILURE:
            return {
                ...state,
                loadingUsers: false,
                loadingUsersError: action.payload
            }

        case ADD_USER_START:
            return {
                ...state,
                addingUser: true,
                userAdded: false,
                addUserFailure: null
            }

        case ADD_USER_SUCCESS:
            return {
                ...state,
                addingUser: false,
                userAdded: true,
                addUserFailure: null
            }

        case ADD_USER_FAILURE:
            return {
                ...state,
                addingUser: false,
                userAdded: false,
                addUserFailure: action.payload
            }
        
        default:
            return state;
    }
}

export default reducer;