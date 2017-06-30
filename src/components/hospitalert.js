import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Nav from './nav';
import Landing from './landing';
import Dashboard from './dashboard';
import NewHosp from './new-hosp';

import './main.css';

export default function Hospitalert() {
	return (
		<Router>
			<div className="hospitalert">
				<Nav />
				<main>
					<Redirect from="/" to="/home" />
				{/*make route for landing just "/" and remove redirect */}
					<Route exact path="/home" component={Landing} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/new" component={NewHosp} />
				</main>
			</div>
		</Router>
	);
}