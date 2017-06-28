import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


export function Nav(props) {
	return (
		<nav>
			<ul>
				<li><Link to="/home">Hospitalert</Link></li>
				<li><Link to={`/${props.dashboardOrLogin}`}>{props.dashboardOrLogin}</Link></li>
			</ul>
		</nav>
		);
}

const mapStateToProps = (state) => ({
	dashboardOrLogin: (state.isLoggedIn ? 'Dashboard' : 'Login')
})

export default connect(mapStateToProps)(Nav);