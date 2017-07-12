import React from 'react';
import {connect} from 'react-redux';

import {createNewUser} from '../actions';

export class SignUpForm extends React.Component {

buildNewUser(event) {
	event.preventDefault();
	const newUser = {
		name: this.name.value,
		email: this.email.value,
		password: this.password.value
	};
	this.props.dispatch(createNewUser(newUser));
}

	render() {
		return (
	      <section className="signup-form">
	        <h2>Signup</h2>
	        <form onSubmit={e => this.buildNewUser(e)}>
	          <label for="name">Name</label>
	          <input type="text" id="name" ref={input =>
						this.name = input} required />
	          
	          <label for="email">Email</label>
	          <input type="email" ref={input =>
						this.email = input} required />
	          
	          <label for="password">Password</label>
	          <input type="password" ref={input =>
						this.password = input} required />
	          
	          <br /><button type="submit">Submit</button>
	        </form>
	      </section>
			);
	}
}

export default connect()(SignUpForm);