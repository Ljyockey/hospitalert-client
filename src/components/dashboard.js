import React from 'react';
import {connect} from 'react-redux';
import Collapsible from 'react-collapsible';

import NewHosp from './new-hosp';

import {deleteHospitalization, formToggle, updateItem, newHospToggle, getHospitalizations} from '../actions';

import './style/dashboard.css';

const axios = require('axios');
const {API_BASE_URL} = require('../config');

export class Dashboard extends React.Component {

	componentWillMount() {
		axios.get(`${API_BASE_URL}/hospitalizations/${this.props.userId}`)
			.then(res => {
				this.props.dispatch(getHospitalizations(res.data.hospitalizations));
			})
		.catch(err => console.error(err));
	}

	toggleNewHosp(event) {
		event.preventDefault();
		this.props.dispatch(newHospToggle());
	}

	formToggleHandler(event, index) {
		event.preventDefault();
		this.props.dispatch(formToggle(index));
	}

	editItemHandler(event, index) {
		event.preventDefault();
		const itemsToUpdate = {}
		//only sends fields to API that have values so that existing data
		//doesn't get erased
		if(this.conscious.value !== "") {
			const conscious = this.conscious.value === "yes" ? true : false
			itemsToUpdate.conscious = conscious;
		}
		if(this.status.value !== "") {
			itemsToUpdate.latestUpdate = this.status.value
		}
		if(this.condition.value !== "") {
			itemsToUpdate.condition = this.condition.value
		} 
		this.props.dispatch(updateItem(itemsToUpdate, index));
		this.props.dispatch(formToggle(index));
	}

	removeItem(event, index) {
		event.preventDefault();
		this.props.dispatch(deleteHospitalization(index));
	}

	render() {

		const newHosp = (this.props.showNewHosp ? <NewHosp /> : undefined);

		const formattedDbItems = (this.props.dbItem !== undefined && this.props.dbItem.length > 0) ? (
		
		//creates Collapsible	
		this.props.dbItem.map((item) => 
			item.isAForm ?
				(<div className="js-hospitalizations-item item-edit" key={item.id}>
					<h2>{item.patient}</h2>
					<form onSubmit={e => this.editItemHandler(e, item.id)}>
						<label>Latest Status</label>
						<textarea placeholder={item.latestUpdate} ref={input =>
							this.status = input}></textarea>
						<label>Condition</label>
						<input type="text" placeholder={item.condition} ref={input => 
							this.condition = input} />
						<label>Conscious?</label>
						<select name="conscious" title="conscious" ref={input =>
							this.conscious = input}>
							<option></option>
							<option value="yes">yes</option>
							<option value="no">no</option>
						</select>
						<button type="submit" className="button-space">Submit</button>
						<button onClick={e => this.formToggleHandler(e, item.id)} className="cancel button-space">Cancel</button>
					</form>
				</div>)
			:
				(<Collapsible className="js-hospitalizations-item" key={item.id}
					trigger={item.patient}>
					<h2>{item.patient}</h2>
					<h3>Latest Status</h3>
					<p>{item.latestUpdate}</p>
					<h4>Condition</h4>
					<p>{item.condition}</p>
					<h4>Conscious?</h4>
					<p>{item.conscious ? 'yes' : 'no'}</p>
					<button onClick={e => this.formToggleHandler(e, item.id)} className="edit button-space">Edit</button>
					<button onClick={e => this.removeItem(e, item.id)} className="delete button-space">Delete</button>
				</Collapsible>)
			
		)):
				
			<p>You haven't added any hospitalizations yet.</p>

		return (
			<div className="dashboard-main">
				<header className="dashboard-header">
					<div className="dashboard-wide mdl-card mdl-shadow--6dp">
						<div className="mdl-card__title">
							<h1 className="mdl-card__title-text">Hello, {this.props.userName}.</h1>
						</div>
						<div className="mdl-card__supporting-text">
							<p>View hositalizations and update the status. Your friends will be able to see the updated statuses.</p>
							<p>Create a new hospitalization entry and update the status.</p>
						</div>
					</div>
				</header>
				<h2 className="hospitalizations-header">Hospitalizations</h2>
				<div className="js-hospitalizations js-accordion container">
					{formattedDbItems}
				</div>
				<div className="create-new-container">
					<button onClick={e => this.toggleNewHosp(e)} className="create-new">
						{this.props.createOrHide}
					</button>
					{newHosp}
				</div>
			</div>
			);
	}
}

const mapStateToProps = (state) => ({
	dbItem: state.hospitalizations,
  	showNewHosp: state.showNewHosp,
	createOrHide: state.showNewHosp ? 'hide' : 'Create New',
	userId: state.currentUser.id,
	userName: state.currentUser.name
});

export default connect(mapStateToProps)(Dashboard);