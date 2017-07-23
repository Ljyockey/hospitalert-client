import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import Friends from '../../components/friends';

describe('<Friends />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Friends /></Provider>)
    });

});