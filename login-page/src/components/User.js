import React from 'react';

import styled from 'styled-components';

// Styled Components

const UserCard = styled.div`
    width: 29%;
    max-height: 190px;
    padding: 0 8px;
    margin: 10px 0;
    font-size: 1rem;
    word-wrap: break-word;
    background: #FFF2E4;

    p {
        margin: 8px 0;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

// User Component

const User = props => {
    return (
        <UserCard>
            <p><strong>Username:</strong> {props.username}</p>
            <p><strong>Password:</strong> {props.password}</p>
        </UserCard>
    )
}

export default User;