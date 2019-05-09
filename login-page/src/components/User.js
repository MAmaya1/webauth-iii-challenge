import React from 'react';

const User = props => {
    return (
        <div className="user">
            <p><strong>Username:</strong> {props.username}</p>
            <p><strong>Password:</strong> {props.password}</p>
        </div>
    )
}

export default User;