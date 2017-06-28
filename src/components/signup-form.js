import React from 'react';
import {connect} from 'react-redux';

export class SignUpForm extends React.Component {
	render() {
		return (
	      <section className="signup-form">
	        <h2>Signup</h2>
	        <form>
	          <label for="name">Name</label>
	          <input type="text" id="name" />
	          
	          <label for="email">Email</label>
	          <input type="email" />
	          
	          <label for="password">Password</label>
	          <input type="password" />
	          
	          <br /><button type="submit">Submit</button>
	        </form>
	      </section>
			);
	}
}

export default connect()(SignUpForm);