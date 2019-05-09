import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../actions';

class UsersView extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <div className="users-view">
                <h2>Users</h2>
                {this.props.users.map(user => (
                    <p>{user.username}</p>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loadingUsers: state.loadingUsers,
        loadingUsersError: state.loadingUsersError,
        users: state.users
    }
}

export default connect(mapStateToProps, {getUsers})(UsersView);