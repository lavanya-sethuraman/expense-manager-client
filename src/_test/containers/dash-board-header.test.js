import React from 'react';
import {shallow} from 'enzyme';
import DashBoardHeader from '../../containers/dash-board-header';
import '../test-set-up';
import store from '../../store';
  
describe('Dashboard Header', () => {
    it('Renders without crashing', () => {    
        shallow(<DashBoardHeader store = {store}/>);
    });
});
