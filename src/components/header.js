import React from 'react';
import {connect} from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import {userLogin} from '../actions';

import './style/header.css'

const axios = require('axios');
const {API_BASE_URL, APP_ID} = require('../config');

export class Header extends React.Component {

	responseFacebook(response) {
		if(!('status' in response)) {
			//dispatch loading action
			axios.post(`${API_BASE_URL}/users/facebook`, response)
			.then(user => {
				//add something to remove the loading
				this.props.dispatch(userLogin(user.data));
			});
		}
	}

	render() {
		return (
				<header className="landing" id="home">
					<div className="landing-text">
						<h1>HospitAlert</h1>
						<p>Stay up-to-date when the unthinkable happens.
						Any time. Anywhere.
						</p>
						<FacebookLogin
							appId={APP_ID}
							autoload={true}
							fields="name,email,picture"
							callback={(r) => this.responseFacebook(r)}
							size="small"
							cssClass="fb-button"
							textButton=" Get Started"
						/>
					</div>
				</header>
			);
	}
}

export default connect()(Header)