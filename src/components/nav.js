import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {userLogin, userLogout, removeUser} from '../actions';

import './nav.css';

const axios = require('axios');
const {API_BASE_URL} = require('../config');

export class Nav extends React.Component {

	checkCredentials(event) {
	event.preventDefault();
	const credentials = {
		username: this.email.value,
		password: this.password.value
	};
	axios.get(`${API_BASE_URL}/users/dashboard`, {auth: credentials})
	.then(res => {
		this.props.dispatch(userLogin(res.data));
		});
	this.email.value = '';
	this.password.value = '';
	}

	logout(event) {
		event.preventDefault();
		this.props.dispatch(userLogout());
	}

	deleteAccount(event) {
		event.preventDefault();
		this.props.dispatch(removeUser());
	}

	render() {

		const loginFormOrAccountInfo = this.props.loginOrName === 'Login' ? 
		<form className="login-form dropdown-menu" onSubmit={e => this.checkCredentials(e)}>
			<label htmlFor="email">Email</label>
			<input type="email" id="email" ref={input =>
			this.email = input} />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" ref={input =>
			this.password = input} />
			<input type="submit" value="Submit" />
			<a href="#signup-form">Signup</a>
		</form>
		:
		<ul className="dropdown-menu account-settings">
            <li><button onClick={e => this.logout(e)} className="logout">Logout</button></li>
            <li><button onClick={e => this.deleteAccount(e)}>Delete Account</button></li>
		</ul>
		


	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#landing-nav" aria-expanded="false">
						<span className="sr-only">Toggle Navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link className="navbar-brand" to="/">HospitAlert</Link>
				</div>
				<div className="collapse navbar-collapse" id="landing-nav">
					<ul className="nav navbar-nav">
						<li>{this.props.dashboardOrSignup}</li>
						<li>{this.props.friendsOrAbout}</li>
						<li className="dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" role="button" 
								aria-haspopup="true" aria-expanded="false">{this.props.loginOrName} 
								<span className="caret"></span></a>
									{loginFormOrAccountInfo}
						</li>
						<li className="facebook-btn">
							{/* <div className="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="continue_with" 
							data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div> */}
							<a href={`${API_BASE_URL}/users/auth/facebook`}>
								<input type="button" value="Login with Facebook"/></a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		);
	}
}

const mapStateToProps = (state) => ({
	dashboardOrSignup: state.isLoggedIn ? <Link to="/dashboard">Dashboard</Link> : <a href="#signup-form">Signup</a>,
	friendsOrAbout: state.isLoggedIn ? <Link to="/friends">Friends</Link> : <a href="#about">About</a>,
	loginOrName: state.isLoggedIn ? state.currentUser.name : 'Login'
})

export default connect(mapStateToProps)(Nav);
