import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import Hospitalert from '../../components/hospitalert';

describe('<Hospitalert />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Hospitalert /></Provider>)
    });

});