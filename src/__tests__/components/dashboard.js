import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import Dashboard from '../../components/dashboard';

describe('<Dashboard />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Dashboard /></Provider>)
    });

});