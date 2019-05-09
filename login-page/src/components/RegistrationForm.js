import React from 'react';
import { Link } from 'react-router-dom';

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
                    <button>Sign Up</button>
                </form>
                <Link exact to="/">Back to Login</Link>
            </div>
        )
    }
}

export default RegistrationForm;