import React from 'react';
import {connect} from 'react-redux';

import './css/header.css'

export class Header extends React.Component {
	render() {
		return (
				<header className="landing" id="home">
					<div className="landing-text">
						<h1>HospitAlert</h1>
						<p>Stay up-to-date when the unthinkable happens.
						Any time. Anywhere.
						</p>
					</div>
				</header>
			);
	}
}

export default connect()(Header)