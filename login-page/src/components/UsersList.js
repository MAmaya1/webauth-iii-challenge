import React from 'react';

import User from './User';

const UsersList = props => {
    return (
        <div className="users-list">
            {props.users.map(user => (
                <User
                    key={user.id}
                    username={user.username}
                    password={user.password}
                />
            ))}
        </div>
    )
}

export default UsersList;