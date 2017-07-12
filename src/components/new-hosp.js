import React from 'react';
import {connect} from 'react-redux';

import {addNewHosp, newHospToggle} from '../actions';

export class NewHosp extends React.Component {

  submitHosp(event) {
    event.preventDefault();
    const newH = {
      patient: this.patient.value,
      condition: this.condition.value,
      conscious: this.conscious.checked,
      latestUpdate: this.status.value
    }
    this.props.dispatch(addNewHosp(newH));
    this.props.dispatch(newHospToggle());
  }

	render() {

		return (   
      <section className="new-hosp">
        <form onSubmit={e => this.submitHosp(e)}>
          <label for="patient">Patient</label>
          <input id="patient" type="text" ref={input => 
            this.patient = input} required />
          
          <label for="condition">Condition</label>
          <input id="condition" type="text" ref={input =>
            this.condition = input} required />
          
          <label for="status">Status</label>
          <textarea ref={input => 
            this.status = input}></textarea>
          
          <input type="checkbox" name="conscious" value="conscious" 
            ref={input => this.conscious = input
            }/> Conscious?<br />
          
            <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          
        </form>
      </section>
    )
	}
}

export default connect()(NewHosp);