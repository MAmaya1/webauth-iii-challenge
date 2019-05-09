import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions';

import styled from 'styled-components';

// Styled Components

const LoginPage = styled.div`
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

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

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
        position: absolute;
        text-align: center;
        margin: 123px 300px;
        font-size: 0.8rem;
    }
`

// Login Component Constructor

class Login extends React.Component {
    state = {
        credentials: {
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

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/protected')
            })
    }

    render() {
        return (
            <LoginPage>
                <h2>Log In</h2>
                <LoginForm>
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
                    {this.props.logInError && (<p className="err">{this.props.logInError}</p>)}
                    <button onClick={this.login}>
                        {this.state.loggingIn ? ('Logging in...') : ('Login')}
                    </button>
                    <p>Not a registered user? <Link to="/register">Sign Up</Link></p>
                </LoginForm>
            </LoginPage>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn,
        logInError: state.logInError
    }
}

export default connect(mapStateToProps, {login})(Login);