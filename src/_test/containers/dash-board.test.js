import React from 'react';
import {shallow} from 'enzyme';
import  DashBoard from '../../containers/dash-board';
import '../test-set-up';
import store from '../../store';


describe('Dashboard Header', () => {
    it('Renders without crashing', () => {
        shallow(<DashBoard store={store} />);
    });
});
