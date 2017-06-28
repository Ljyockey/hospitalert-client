import React from 'react';
import {connect} from 'react-redux';

export function Dashboard(props) {
	// let formattedDbItems;
	const formattedDbItems = props.dbItem.map((item, index) => (
		// formattedDbItems += 
			<div className="js-hospitalizations-item" key={index}>
				<h2>{item.patient}</h2>
				<h3>Latest Status</h3>
				<p>{item.latestUpdate}</p>
				<h4>Condition</h4>
				<p>{item.condition}</p>
				<h4>Conscious?</h4>
				<p>{item.conscious}</p>
				<button className="edit">Edit</button>
				<button className="delete">Delete</button>
			</div>
	));
	return (
		<main>
			<h1>Hospitalizations</h1>
			<div className="js-hospitalizations">
				{formattedDbItems}
			</div>
		</main>
		);
}

const mapStateToProps = (state) => ({
	dbItem: state.mockDb
});

export default connect(mapStateToProps)(Dashboard);