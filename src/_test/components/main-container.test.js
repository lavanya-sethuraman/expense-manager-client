import React from 'react';
import {shallow} from 'enzyme';
import  MainContainer from '../../components/main-container';
import '../test-set-up'


describe(' MainContainer', () => {
    it('Renders without crashing', () => {
        shallow(< MainContainer />);
    });
});
