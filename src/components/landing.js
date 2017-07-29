import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import LandingMain from './landing-main';

import './css/landing.css';

const axios = require('axios');
const {API_BASE_URL} = require('../config');

export class Landing extends React.Component {

	componentWillMount() {
		axios.get(API_BASE_URL);
	}

	render() {
		return (
			<main>
				<Header />
				<LandingMain />
			</main>
			);
	}
}

export default connect()(Landing);