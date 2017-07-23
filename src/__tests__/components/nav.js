import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import Nav from '../../components/nav';

describe('<Nav />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Nav /></Provider>)
    });

});