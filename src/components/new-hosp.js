import React from 'react';
import {connect} from 'react-redux';

import {addNewHosp, newHospToggle} from '../actions';

const axios = require('axios');
const {API_BASE_URL} = require('../config');

export class NewHosp extends React.Component {

  resetForm(event) {
    event.preventDefault();
    this.patient.value = '';
    this.condition.value = '';
    this.status.value = '';
    this.conscious.checked = false;
  }

  submitHosp(event) {
    event.preventDefault();
    const newH = {
      patient: this.patient.value,
      condition: this.condition.value,
      conscious: this.conscious.checked,
      latestUpdate: this.status.value,
      userId: this.props.userId || 1
    }
    axios.post(`${API_BASE_URL}/hospitalizations`, newH)
      .then(res => {
        this.props.dispatch(newHospToggle());
        this.props.dispatch(addNewHosp(res.data))
      });
  }

	render() {

		return (   
      <section className="new-hosp">
        <form onSubmit={e => this.submitHosp(e)}>
          <label htmlFor="patient">Patient</label>
          <input id="patient" type="text" ref={input => 
            this.patient = input} required />
          
          <label htmlFor="condition">Condition</label>
          <input id="condition" type="text" ref={input =>
            this.condition = input} required />
          
          <label htmlFor="status">Status</label>
          <textarea ref={input => 
            this.status = input}></textarea>
          
          <input type="checkbox" name="conscious" value="conscious" 
            ref={input => this.conscious = input
            }/> Conscious?<br />
          
            <button type="submit">Submit</button>
          <button type="reset" onClick={e => this.resetForm(e)}>Reset</button>
          
        </form>
      </section>
    )
	}
}

const mapStateToProps = (state) => ({
  userId: state.currentUser.id
})

export default connect(mapStateToProps)(NewHosp);