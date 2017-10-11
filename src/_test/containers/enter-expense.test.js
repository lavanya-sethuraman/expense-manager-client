import React from 'react';
import {shallow} from 'enzyme';
import  EnterExpense from '../../containers/enter-expense';
import '../test-set-up';
import store from '../../store';

describe('EnterExpense', () => {
    it('Renders without crashing', () => {
        shallow(<EnterExpense store={store}/>);
    });
});
