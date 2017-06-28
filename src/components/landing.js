import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import LandingMain from './landing-main';
import SignupForm from './signup-form';

export class Landing extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<LandingMain />
				<SignupForm />
			</main>
			);
	}
}

export default connect()(Landing);