import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './nav.css';


export function Nav(props) {
	return (
		<nav>
			<ul className="navigation">
				<li><Link to="/">Hospitalert</Link></li>
				<li><Link to={`/${props.dashboardOrLogin}`}>{props.dashboardOrLogin}</Link></li>
				<li><Link to="/friends">Friends</Link></li>
			</ul>
		</nav>
		);
}

const mapStateToProps = (state) => ({
	dashboardOrLogin: (state.isLoggedIn ? 'Dashboard' : 'Login')
})

export default connect(mapStateToProps)(Nav);