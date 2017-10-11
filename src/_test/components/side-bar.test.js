import React from 'react';
import {shallow} from 'enzyme';
import  SideBar from '../../components/side-bar';
import '../test-set-up'


describe('SideBar', () => {
    it('Renders without crashing', () => {
        shallow(<SideBar />);
    });
});
