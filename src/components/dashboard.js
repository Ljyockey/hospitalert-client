import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {deleteHospitalization, formToggle} from '../actions';

export class Dashboard extends React.Component {

	formToggleHandler(event, index) {
		event.preventDefault();
		this.props.dispatch(formToggle(index));
	}

	removeItem(event, index) {
		event.preventDefault();
		this.props.dispatch(deleteHospitalization(index));
	}

	render() {

		const formattedDbItems = this.props.dbItem.map((item, index) => (
			item.isAForm ?
				(<div className="js-hospitalizations-item-edit" key={index}>
					<form>
						<h2>{item.patient}</h2>
						<label>Latest Status</label>
						<input type="text" placeholder={item.latestUpdate} />
						<label>Condition</label>
						<input type="text" placeholder={item.condition} />
						<label>Conscious?</label>
						<input type="text" placeholder={item.conscious} />
						<button onClick={e => this.removeItem(e, index)} type="submit">Submit</button>
						<button onClick={e => this.formToggleHandler(e, index)} className="cancel">Cancel</button>
					</form>
				</div>)
			:
				(<div className="js-hospitalizations-item" key={index}>
					<h2>{item.patient}</h2>
					<h3>Latest Status</h3>
					<p>{item.latestUpdate}</p>
					<h4>Condition</h4>
					<p>{item.condition}</p>
					<h4>Conscious?</h4>
					<p>{item.conscious}</p>
					<button onClick={e => this.formToggleHandler(e, index)} className="edit">Edit</button>
					<button onClick={e => this.removeItem(e, index)} className="delete">Delete</button>
				</div>)
			
		));

		return (
			<main>
				<h1>Hospitalizations</h1>
				<Link to="/new">Create New</Link>
				<div className="js-hospitalizations">
					{formattedDbItems}
				</div>
			</main>
			);
	}
}

const mapStateToProps = (state) => ({
	dbItem: state.mockDb
});

export default connect(mapStateToProps)(Dashboard);