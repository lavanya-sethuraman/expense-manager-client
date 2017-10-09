import React from 'react';
import {shallow} from 'enzyme';
import  MainContainer from './main-container';
import '../../src/test-set-up'


describe(' MainContainer', () => {
    it('Renders without crashing', () => {
        shallow(< MainContainer />);
    });
});
