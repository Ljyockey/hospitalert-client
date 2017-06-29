import React from 'react';
import {connect} from 'react-redux';

export class NewHosp extends React.Component {
	render() {
		return (   
		 <main>
      
      <section>
        <form>
          <label for="patient">Patient</label>
          <input id="patient" type="text" />
          
          <label for="condition">Condition</label>
          <input id="condition" type="text" />
          
          <label for="status">Status</label>
          <textarea></textarea>
          
          <input type="checkbox" name="conscious" value="conscious" /> Conscious?<br />
          
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          
        </form>
      </section>
      
    </main>
    )
	}
}

export default connect()(NewHosp);