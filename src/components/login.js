import React from 'react';
import {connect} from 'react-redux';

import {checkCredentials} from '../actions';

import './login.css';

export class Login extends React.Component {

    checkCredentials(event) {
        event.preventDefault();
        const credentials = {
            username: this.email.value,
            password: this.password.value
        };
        this.props.dispatch(checkCredentials(credentials))
    }

    render() {
        return (
            <div className="login-box">
                <form className="login-form" onSubmit={e => this.checkCredentials(e)}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={input =>
                    this.email = input} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={input =>
                    this.password = input} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default connect()(Login);