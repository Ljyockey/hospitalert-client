import React from 'react';
import {connect} from 'react-redux';
import Collapsible from 'react-collapsible';

import {getHospitalizations} from '../actions';

import './css/friend-profile.css';

const axios = require('axios');
const {API_BASE_URL} = require('../config');

export class FriendProfile extends React.Component {

    componentWillMount() {
        axios.get(`${API_BASE_URL}/hospitalizations/${this.props.profile.id}`)
        .then(res => {
            this.props.dispatch(getHospitalizations(res.data.hospitalizations));
        })
    }

    render() {
        const formattedDbItems = (this.props.hosp.length > 0) ? (
            this.props.hosp.map((item) =>
            <Collapsible className="js-hospitalizations-item" key={item.id}
					trigger={item.patient}>
					<h2>{item.patient}</h2>
					<h3>Latest Status</h3>
					<p>{item.latestUpdate}</p>
					<h4>Condition</h4>
					<p>{item.condition}</p>
					<h4>Conscious?</h4>
					<p>{item.conscious ? 'yes' : 'no'}</p>
				</Collapsible>
        )):
            <p>{this.props.profile.name} hasn't added any hospitalizations yet.</p>

        return (
        <div className="profile-main">
            <header className="dashboard-header">
                <div className="dashboard-wide mdl-card mdl-shadow--6dp">
                    <div className="mdl-card__title mdl-card--expand">
                        <h1 className="mdl-card__title-text header">{this.props.profile.name}</h1>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <p>View hositalizations posted by {this.props.profile.name} here.</p>
                        <p>{this.props.profile.name} has posted {this.props.hosp.length} hospitalizations.</p>
                    </div>
                </div>
            </header>
            <h2 className="hospitalizations-header">Hospitalizations</h2>
            <div className="js-hospitalizations js-accordion container">
                {formattedDbItems}
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    hosp: state.hospitalizations
});

export default connect(mapStateToProps)(FriendProfile);