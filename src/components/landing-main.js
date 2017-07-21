import React from 'react';
import {connect} from 'react-redux';

export class LandingMain extends React.Component {
	render() {
		return (
			<section className="landing-main">
				<section id="about">
					<div className="about-wide mdl-card mdl-shadow--8dp">
						<div className="mdl-card__title">
							<h2>What is HospitAlert?</h2>
						</div>
						<div className="mdl-card__supporting-text">
							<p>It's everyone's worst nightmare: A loved one has been hospitalized and you are unable to be there with them.
							If someone is at the hospital with them, keeping everybody up-to-date with calls and texts may be too overwhelming.
							Social media is fast and easy, but it isn't very private. With HospitAlert, you and your family members can
							all stay up-to-date in a fast, secure location.</p>
						</div>
					</div>
				</section>

				<section className="features">

					<div className="container">
						<div className="row">
							<div className="col-md-3 post mdl-card mdl-shadow--6dp">
								 <div className="mdl-card__title mdl-card--expand"> 
									<h3 className="mdl-card__title-text">Add an Event</h3>
								</div>
								<div className="mdl-card__supporting-text">
									<p>If you are at the hospital with a consenting loved one, you can create a new hospitalization.
									You will then be able to control who is able to view the hospitalization.</p>
								</div>
							</div>

							<div className="col-md-3"></div>

							<div className="col-md-3 status mdl-card mdl-shadow--6dp">
								<div className="mdl-card__title mdl-card--expand">
									<h3 className="mdl-card__title-text">Update Status</h3>
								</div>
								<div className="mdl-card__supporting-text">
									<p>Post updates any time you have information you want to share. Your friends will be able
										to view the updates.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		)
	}
}

export default connect()(LandingMain)