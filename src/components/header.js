import React from 'react';
import {connect} from 'react-redux';

import './header.css'

export class Header extends React.Component {
	render() {
		return (
				<header className="landing">
					<div className="landing-text">
						<h1>Hospitalert</h1>
						<p>Stay up-to-date when the unthinkable happens.
						Any time. Anywhere.
						</p>
					</div>
				</header>
			);
	}
}

export default connect()(Header)