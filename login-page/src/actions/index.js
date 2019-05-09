import axios from 'axios';
import axiosWithAuth from '../utils/axiosAuth';

// Login Action Types

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Login Action Creator

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('http://localhost:5000/api/auth/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: 'Invalid credentials'})
        })
}

// Get Users Action Types

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

// Get Users Action Creator

export const getUsers = () => dispatch => {
    dispatch({ type: GET_USERS_START });
        axiosWithAuth()
            .get('http://localhost:5000/api/users')
            .then(res => {
                dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USERS_FAILURE,
                    payload: 'Could not load users from database.'
                })
            })
}

// Register New User Action Types

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

// Register New User Action Types

export const addUser = credentials => dispatch => {
    dispatch({ type: ADD_USER_START });
        axios
            .post('http://localhost:5000/api/auth/register', credentials)
            .then(res => {
                dispatch({ type: ADD_USER_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: ADD_USER_FAILURE, payload: 'A user with that username already exists.' })
            })
}