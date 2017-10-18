import React from 'react';
import {shallow} from 'enzyme';
import  DashBoard from '../../containers/dash-board';
import '../test-set-up';
import {mockStore} from '../test-set-up';

const expenseManagerReducer = {
    budget: {gas:400},
    expense: [],
    totalExpense:{}
};

const authReducer= {
    authToken: null,
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
        wrapper = shallow(<DashBoard store={store} />); 
    }); 

    it('Renders without crashing', () => {
        expect(wrapper.length).toEqual(1);        
    });

    it("check user loggeedIn", () => {
        expect(wrapper.prop('loggedIn')).toEqual(true);
        expect(wrapper.prop('expenseManager')).toEqual(initialState.expenseManager);        
     });

});
