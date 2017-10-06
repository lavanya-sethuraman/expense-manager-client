import React from 'react';
import {shallow} from 'enzyme';
import  EnterExpense from './enter-expense-modal';
import '../../src/test-set-up';
import store from '../store';
import '../local-storage';

describe('EnterExpense', () => {
    it('Renders without crashing', () => {
        shallow(<EnterExpense store={store}/>);
    });
});
