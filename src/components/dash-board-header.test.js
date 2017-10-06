import React from 'react';
import {shallow} from 'enzyme';
import DashBoardHeader from './dash-board-header';
import '../../src/test-set-up';
import store from '../store';
  

describe('Dashboard Header', () => {
    const localStorage = jest.fn();  
    it('Renders without crashing', () => {    
        shallow(<DashBoardHeader store = {store}/>);
    });
});
