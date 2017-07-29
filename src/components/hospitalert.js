import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './nav';
import Landing from './landing';
import Dashboard from './dashboard';
import Friends from './friends';
import FriendProfile from './friend-profile';
import Footer from './footer';

import './css/main.css';

// const Footer = require('./footer');

export default function Hospitalert() {
	return (
			<Router>
				<div className="hospitalert">
					<Nav />
					<main>
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/friends" component={Friends} />
						<Route exact path="/profile/:id" component={FriendProfile} />
					</main>
					<Footer />
				</div>
			</Router>
	);
}