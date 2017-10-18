import React from 'react';
import {shallow} from 'enzyme';
import  Graphs from '../../containers/graphs';
import '../test-set-up';
import {mockStore} from '../test-set-up';

const expenseManagerReducer = {
    budget: {},
    expense: [],
    totalExpense:{gas:500}
};

const authReducer= {
    authToken: null,
    currentUser: null
};

const initialState = {
    expenseManager: expenseManagerReducer,
    auth: authReducer
}
const store = mockStore(initialState);

describe('Dashboard Header', () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = shallow(<Graphs store={store} />); 
    }); 

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1);        
    });

    it("check user loggeedIn", () => {
        expect(wrapper.prop('totalExpense')).toEqual(initialState.expenseManager.totalExpense);     
     });

});
