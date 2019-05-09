import React from 'react';
import { connect } from 'react-redux';

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

    render() {
        return (
            <div className="login">
                <h1>Log In</h1>
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
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {})(Login);