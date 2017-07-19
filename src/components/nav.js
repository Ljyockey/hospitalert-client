import React from 'react';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {FacebookLogin} from 'react-facebook-login-component';

import {userLogin, userLogout, removeUser} from '../actions';

import './nav.css';

const axios = require('axios');
const {API_BASE_URL, APP_ID} = require('../config');

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

	facebookLogin(event) {
		event.preventDefault();
		axios.get(`${API_BASE_URL}/users/auth`)
		.then(res => {
			console.log(res);
		})
	}

	dispatchLogin(user) {
		this.props.dispatch(userLogin(user));
	}
	
	responseFacebook(response) {
		if(!('status' in response)) {
			axios.post(`${API_BASE_URL}/users/facebook`, response)
			.then(user => {
				this.props.dispatch(userLogin(user.data));
			});
		}
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
							<FacebookLogin
          						socialId={APP_ID}
          						lang="en_US"
								xfbml={true}
								version="v2.9"
          						fields="name,email,picture"
								scope="public_profile,user_friends,email"
          						responseHandler={(r) => this.responseFacebook(r)}
								buttonText="Login with Facebook"
        					/>
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
