import React from 'react';
import {shallow} from 'enzyme';
import  SetBudget from '../../containers/set-budget';
import '../test-set-up';
import store from '../../store';


describe('SetBudget', () => {
    it('Renders without crashing', () => {
        shallow(<SetBudget store={store} />);
    });
});
