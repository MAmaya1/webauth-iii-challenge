import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

// Styled Components

const Header = styled.header`
    width: 100%;
    background: #33C5E6;
`

const HeadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
    padding: 10px 20px;
    margin: auto;
    
    h1 {
        margin: 0;

        @media (max-width: 500px) {
            font-size: 1.5rem;
        }
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
            <HeadWrapper>
                <h1>Registered Users</h1>
                <LogOutButton onClick={logout}>Log Out</LogOutButton>
            </HeadWrapper>
        </Header>
    )
}

export default withRouter(UsersHeader);