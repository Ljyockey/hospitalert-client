import React from 'react';
import {connect} from 'react-redux';

export class Header extends React.Component {
	render() {
		return (
				<header>
					<h1>Hospitalert</h1>
					<p>Stay up-to-date when the unthinkable happens.
					Any time. Anywhere.
					</p>
				</header>
			);
	}
}

export default connect()(Header)