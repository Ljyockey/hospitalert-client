import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../store';

import Lancding from '../../components/landing';

describe('<Lancding />', () => {

    it('renders without crashing', () => {
        shallow(<Provider store={store}><Lancding /></Provider>)
    });

});