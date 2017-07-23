import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import NewHosp from '../../components/new-hosp';

describe('<NewHosp />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><NewHosp /></Provider>)
    });

});