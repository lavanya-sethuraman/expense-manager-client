import React from 'react';
import {shallow} from 'enzyme';
import  Graphs from '../../containers/graphs';
import '../test-set-up';
import store from '../../store';


describe('Graphs', () => {
    it('Renders without crashing', () => {
        shallow(<Graphs store={store} />);
    });
});
