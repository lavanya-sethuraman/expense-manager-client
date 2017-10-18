import React from 'react';
import {shallow} from 'enzyme';
import  ExpenseManager from '../../containers/expense-manager';
import '../test-set-up';
import {mockStore} from '../test-set-up';

const expenseManagerReducer = {
    budget: {},
    expense: [],
    totalExpense:{}
};

const authReducer= {
    authToken: "token",
    currentUser: "test"
};

const initialState = {
    expenseManager: expenseManagerReducer,
    auth: authReducer
}
const store = mockStore(initialState);

describe('Dashboard Header', () => {
    let wrapper; 
    beforeEach(() => {
        wrapper = shallow(<ExpenseManager store={store} />); 
    }); 

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1);        
    });

    it("check user loggeedIn", () => {
        expect(wrapper.prop('hasAuthToken')).toEqual(true);
        expect(wrapper.prop('loggedIn')).toEqual(true);        
        
     });

});
