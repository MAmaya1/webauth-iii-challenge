import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addUser } from '../actions';

import styled from 'styled-components';

// Styled Components

const RegisterPage = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 200px auto;
    background: white;
    padding: 20px 30px;
    text-align: center;

    h2 {
        font-size: 2rem;
    }

`

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 180px;

    input {
        width: 40%;
        margin: 5px auto;
        padding: 5px;
    }
    
    button {
        height: 28px;
        width: 100px;
        background: white;
        border: solid 1px grey;
        cursor: pointer;
        margin: 10px auto;

        &:hover {
            background: lightgrey;
            transition: all 200ms ease;
        }
    }

    a {
        color: blue;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .err {
        color: red;
        font-size: 0.8rem;
        margin: 0;
    }

    .success {
        color: red;
        font-size: 0.8rem;
        margin: 0;
    }

    .spacer {
        height: 4px;
    }
`

// Registration Form Component Constructor

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
        this.setState({
            credentials: {
                username: '',
                password: ''
            }
        })
    }
    
    render() {
        return (
            <RegisterPage>
                <h2>Register Here</h2>
                <RegisterForm onSubmit={this.addUser}>
                    <label htmlFor="username"/>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        placeholder="username"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="password"/>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        placeholder="password"
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit">
                            {this.props.addingUser ? ('Adding user...') : ('Add User')}
                        </button>
                        <div className="spacer">{this.props.addUserFailure && (<p className="err">{this.props.addUserFailure}</p>)}</div>
                        <div className="spacer">{this.props.userAdded && (<p className="success">New user added successfully!</p>)}</div>
                        <p>Back to <Link to="/">Login</Link></p>
                    </div>
                </RegisterForm>
            </RegisterPage>
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