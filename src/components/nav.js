import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {checkCredentials, removeUser} from '../actions';

import './nav.css';


export class Nav extends React.Component {

	checkCredentials(event) {
	event.preventDefault();
	const credentials = {
		username: this.email.value,
		password: this.password.value
	};
	this.props.dispatch(checkCredentials(credentials));
	this.email.value = '';
	this.password.value = '';
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
		<ul className="dropdown-menu">
            <li><button type="submit" className="logout">Logout</button></li>
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
						<li><Link to={`/${this.props.dashboardOrLogin}`}>{this.props.dashboardOrLogin}</Link></li>
						<li>{this.props.friendsOrAbout}</li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
								aria-haspopup="true" aria-expanded="false">{this.props.loginOrName} 
								<span className="caret"></span></a>
									{loginFormOrAccountInfo}
						</li>
					</ul>
				</div>
			</div>
		</nav>
		);
	}
}

const mapStateToProps = (state) => ({
	dashboardOrLogin: state.isLoggedIn ? 'Dashboard' : 'Login',
	friendsOrAbout: state.isLoggedIn ? <Link to="/friends">Friends</Link> : <a href="#about">About</a>,
	loginOrName: state.isLoggedIn ? state.currentUser.name : 'Login'
})

export default connect(mapStateToProps)(Nav);
