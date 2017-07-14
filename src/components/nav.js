import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './nav.css';


export function Nav(props) {
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
                    <li><Link to={`/${props.dashboardOrLogin}`}>{props.dashboardOrLogin}</Link></li>
                    <li><Link to="/friends">Friends</Link></li>
                    <li><a className="scroll" href="#about">About</a></li>
                    <li><a className="scroll" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>

    </nav>
		);
}

const mapStateToProps = (state) => ({
	dashboardOrLogin: (state.isLoggedIn ? 'Dashboard' : 'Login')
})

export default connect(mapStateToProps)(Nav);