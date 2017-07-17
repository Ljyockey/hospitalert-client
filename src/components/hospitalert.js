import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './nav';
import Landing from './landing';
import Dashboard from './dashboard';
import Friends from './friends';
import Login from './login';

import './main.css';

export default function Hospitalert() {
	return (
			<Router>
				<div className="hospitalert">
					<main>
						<Nav />
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/friends" component={Friends} />
					</main>
				</div>
			</Router>
	);
}