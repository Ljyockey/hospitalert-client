import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from './nav';
import Landing from './landing';
import Dashboard from './dashboard';
import Friends from './friends';
import FriendProfile from './friend-profile';
import Footer from './footer';

import './style/main.css';

// const Footer = require('./footer');

export class Hospitalert extends React.Component {

	render() {
		return (
				<Router>
					<div className="hospitalert">
						<Nav />
						<main>
							{this.props.homeOrDashboard}
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/friends" component={Friends} />
							<Route exact path="/profile/:id" component={FriendProfile} />
						</main>
						<Footer />
					</div>
				</Router>
		);
	}
}

const mapStateToProps = (state) => ({
	homeOrDashboard: state.isLoggedIn ? <Route exact path="/" component={Dashboard} /> : <Route exact path="/" component={Landing} />
});

export default connect(mapStateToProps)(Hospitalert);