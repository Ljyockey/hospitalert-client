import React from 'react';

export default class Login extends React.component {
    render() {
        return (
            <div className="login-box">
                <form className="login-form">
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