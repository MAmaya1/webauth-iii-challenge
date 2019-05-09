import React from 'react';
import { withRouter } from 'react-router-dom';

const UsersHeader = props => {

    const logout = event => {
        localStorage.removeItem('token');
        props.history.push('/')
    }

    return (
        <header>
            <h1>Users</h1>
            <button onClick={logout}>Log Out</button>
        </header>
    )
}

export default withRouter(UsersHeader);