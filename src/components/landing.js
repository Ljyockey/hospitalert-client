import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import LandingMain from './landing-main';

import './css/landing.css';

export class Landing extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<LandingMain />
				<footer>
					<ul>
						<li>Made by <a href="http://ljyockey.com">L.J. Yockey</a></li>
						<li><a href="https://github.com/Ljyockey"><i className="fa fa-github fa-2x" aria-hidden="true"></i><span className="visuallyhidden">GitHub</span></a></li>
						<li><a href="https://twitter.com/Ljyockey"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i><span className="visuallyhidden">Twitter</span></a></li>
						<li><a href="https://medium.com/@Ljyockey"><i className="fa fa-medium fa-2x" aria-hidden="true"></i><span className="visuallyhidden">Medium</span></a></li>
					</ul>
				</footer>
			</main>
			);
	}
}

export default connect()(Landing);