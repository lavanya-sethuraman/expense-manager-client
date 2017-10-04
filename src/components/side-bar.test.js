import React from 'react';
import {shallow} from 'enzyme';
import  SideBar from './side-bar';
import '../../src/test-set-up'


describe('SideBar', () => {
    it('Renders without crashing', () => {
        shallow(<SideBar />);
    });
});
