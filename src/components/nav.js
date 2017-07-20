import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import {userLogin, userLogout, removeUser} from '../actions';

import './nav.css';

const axios = require('axios');
const {API_BASE_URL, APP_ID} = require('../config');

export class Nav extends React.Component {
	
	responseFacebook(response) {
		if(!('status' in response)) {
			axios.post(`${API_BASE_URL}/users/facebook`, response)
			.then(user => {
				this.props.dispatch(userLogin(user.data));
			});
		}
	}

	demoLogin(event) {
		event.preventDefault()
		const credentials = {
			username: 'yockey.alerts@gmail.com',
			password: 'Password1'
		};
		axios.get(`${API_BASE_URL}/users/dashboard`, {auth: credentials})
		.then(res => {
			this.props.dispatch(userLogin(res.data));
			});
	}

	logout(event) {
		event.preventDefault();
		this.props.dispatch(userLogout());
	}

	deleteAccount(event) {
		event.preventDefault();
		this.props.dispatch(removeUser());
	}

		//for backend facebook auth
		facebookLogin(event) {
		event.preventDefault();
		axios.get('http://localhost:8080/users/auth')
		.then(res => {
			console.log(res);
		})
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


		const navState = this.props.loggedIn ? 
			<ul className="nav navbar-nav">
				<li>{this.props.dashboardOrSignup}</li>
				<li>{this.props.friendsOrAbout}</li>
				<li className="dropdown">
					<a className="dropdown-toggle" data-toggle="dropdown" role="button" 
						aria-haspopup="true" aria-expanded="false">{this.props.loginOrName} 
						<span className="caret"></span></a>
							{loginFormOrAccountInfo}
				</li>
			</ul>
		:
			<ul className="nav navbar-nav">
				<li>{this.props.friendsOrAbout}</li>
				<li>
					<a className="demo-link" onClick={e => this.demoLogin(e)}>
						Demo Account
					</a>
				</li>
				<li className="facebook-btn">
					<FacebookLogin
						appId={APP_ID}
						autoload={true}
						fields="name,email,picture"
						callback={(r) => this.responseFacebook(r)}
						size="small"
						icon="fa-facebook"
						textButton="Login"
					/>
				</li>
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
					{navState}
				</div>
			</div>
		</nav>
		);
	}
}

const mapStateToProps = (state) => ({
	dashboardOrSignup: state.isLoggedIn ? <Link to="/dashboard">Dashboard</Link> : <a href="#signup-form">Signup</a>,
	friendsOrAbout: state.isLoggedIn ? <Link to="/friends">Friends</Link> : <a href="#about">About</a>,
	loginOrName: state.isLoggedIn ? state.currentUser.name : 'Login',
	loggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(Nav);
