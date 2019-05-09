import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addUser } from '../actions';

class RegistrationForm extends React.Component {
    state = {
        credentials:  {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    addUser = event => {
        event.preventDefault();
        this.props.addUser(this.state.credentials)
    }
    
    render() {
        return (
            <div className="register">
                <h2>Register Here</h2>
                <form>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {this.props.addUserFailure && (<p>{this.props.addUserFailure}</p>)}
                    <button onClick={this.addUser}>
                        {this.props.addingUser ? ('Adding user...') : ('Add User')}
                    </button>
                </form>
                {this.props.userAdded && (<p>New user added successfully!</p>)}
                <Link to="/">Back to Login</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingUser: state.addingUser,
        userAdded: state.userAdded,
        addUserFailure: state.addUserFailure
    }
}

export default connect(mapStateToProps, {addUser})(RegistrationForm);