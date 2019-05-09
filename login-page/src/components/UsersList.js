import React from 'react';

import User from './User';

import styled from 'styled-components';

// Styled Components

const UsersListWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 700px;
    background: white;
    margin: auto;
    padding: 20px 30px;

    @media (max-width: 500px) {
        flex-direction: column;
        justify-content: start;
    }
`

// UsersList Component Constructor

const UsersList = props => {
    return (
        <UsersListWrap>
            {props.users.map(user => (
                <User
                    key={user.id}
                    username={user.username}
                    password={user.password}
                />
            ))}
        </UsersListWrap>
    )
}

export default UsersList;