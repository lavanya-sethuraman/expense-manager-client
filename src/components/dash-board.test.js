import React from 'react';
import {shallow} from 'enzyme';
import  DashBoard from './dash-board';
import '../../src/test-set-up';
import store from '../store';


describe('Dashboard Header', () => {
    it('Renders without crashing', () => {
        shallow(<DashBoard store={store} />);
    });
});
