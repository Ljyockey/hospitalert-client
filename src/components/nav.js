import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import {userLogin, userLogout, removeUser} from '../actions';

import './style/nav.css';

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
		axios.delete(`${API_BASE_URL}/users/${this.props.currentUser.id}`)
		.then(res => {
			this.props.dispatch(removeUser());
		});
	}

	render() {

		//delete account link not visible on demo account
		const deleteOrNot = this.props.currentUser.id === 1 ? undefined : <li onClick={e => this.deleteAccount(e)}><Link className="logout" to="/">Delete Account</Link></li> 

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
            <li onClick={e => this.logout(e)}><Link to="/" className="logout">Logout</Link></li>
             {deleteOrNot}
		</ul>


		//displays nav items based on whether user is logged in
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
					{this.props.homeOrTop}
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
	homeOrTop: state.isLoggedIn ? <Link className="navbar-brand" to="/">HospitAlert</Link> : <a className="navbar-brand" href="#home">HospitAlert</a>,
	dashboardOrSignup: state.isLoggedIn ? <Link to="/dashboard">Dashboard</Link> : <a href="#signup-form">Signup</a>,
	friendsOrAbout: state.isLoggedIn ? <Link to="/friends">Friends</Link> : <a href="#about">About</a>,
	loginOrName: state.isLoggedIn ? state.currentUser.name : 'Login',
	loggedIn: state.isLoggedIn,
	currentUser: state.currentUser
})

export default connect(mapStateToProps)(Nav);
