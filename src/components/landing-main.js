import React from 'react';
import {connect} from 'react-redux';

export class LandingMain extends React.Component {
	render() {
		return (
			<section className="main">
				<section id="about">
					<h2>What is HospitAlert?</h2>
					<p>It's everyone's worst nightmare: A loved one has been hospitalized and you are unable to be there with them.
					If someone is at the hospital with them, keeping everybody up-to-date with calls and texts may be too overwhelming.
					Social media is fast and easy, but it isn't very private. With HospitAlert, you and your family members can
					all stay up-to-date in a fast, secure location.</p>
				</section>

				<section className="features">

					<div className="post">
						<h3>Add an Event</h3>
						<p>If you are at the hospital with a consenting loved one, you can create a new hospitalization.
						You will then be able to control who is able to view the hospitalization.</p>
					</div>

					<div className="status">
						<h3>Update Status</h3>
						<p>Post updates any time you have information you want to share. People who can view this
						hospitalization will be notified immediately.</p>
					</div>
				</section>
			</section>
		)
	}
}

export default connect()(LandingMain)