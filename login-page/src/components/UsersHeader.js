import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

// Styled Components

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #33C5E6;
    padding: 10px 20px;
    
    h1 {
        margin: 0;
    }
`

const LogOutButton = styled.button`
    height: 30px;
    width: 80px;
    border: none;
    background: white;
    cursor: pointer;

    &:hover {
        background: lightgrey;
    }
`

// UsersHeader Component Constructor

const UsersHeader = props => {

    const logout = event => {
        localStorage.removeItem('token');
        props.history.push('/')
    }

    return (
        <Header>
            <h1>Registered Users</h1>
            <LogOutButton onClick={logout}>Log Out</LogOutButton>
        </Header>
    )
}

export default withRouter(UsersHeader);