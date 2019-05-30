import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../actions';

import UsersHeader from '../components/UsersHeader';
import UsersList from '../components/UsersList';


class UsersView extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <div className="users-view">
                <UsersHeader/>
                {this.props.loadingUsers && (<p>Loading users...</p>)}
                {this.props.users && (<UsersList users={this.props.users}/>)}
                {this.props.loadingUsersError && (<p>{this.props.loadingUsersError}</p>)}
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