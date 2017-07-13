import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import LandingMain from './landing-main';
import SignupForm from './signup-form';

import './landing.css';

export class Landing extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<LandingMain />
				<SignupForm />
				<footer>
					<ul>
						<li>Made by L.J. Yockey</li>
						<li><a href="https://github.com/Ljyockey"><i class="fa fa-github fa-2x" aria-hidden="true"></i><span class="visuallyhidden">GitHub</span></a></li>
						<li><a href="https://twitter.com/Ljyockey"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i><span class="visuallyhidden">Twitter</span></a></li>
						<li><a href="https://medium.com/@Ljyockey"><i class="fa fa-medium fa-2x" aria-hidden="true"></i><span class="visuallyhidden">Medium</span></a></li>
					</ul>
				</footer>
			</main>
			);
	}
}

export default connect()(Landing);