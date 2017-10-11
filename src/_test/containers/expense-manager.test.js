import React from 'react';
import {shallow} from 'enzyme';
import  ExpenseManager from '../../containers/expense-manager';
import '../test-set-up';
import store from '../../store';


describe('ExpenseManager', () => {
    it('Renders without crashing', () => {
        shallow(<ExpenseManager store={store}/>);
    });
});
