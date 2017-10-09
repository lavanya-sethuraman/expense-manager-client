import reducer from './expense-manager';
import {fetchExpenseManagerSuccess, fetchExpenseManagerError} from '../actions/expense-manager';

describe('expense manager Reducer', () => {

    const budget = {
        gas: 0,
        water: 0,
        electricity: 0,
        tv: 0,
        rent: 0,
        phone: 0,
        misc: 0,
        groceries: 0,
        kids: 0,
        travel: 0,
        restaurant: 0
    };
    const expense = [{category: "phone", amount: "100", date: "2017-10-07T20:03:30.935Z"}];
    const totalExpense= {category: "phone", amount: 100};
    const expenseManager = {
        expense:expense,
        budget:budget,
        totalExpense:totalExpense
    };
    const error = "ERROR";

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            budget: {},
            expense: [],
            totalExpense:{}
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {budget: {},expense: [],totalExpense:{}};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('fetchExpenseManagerSuccess', () => {
        it('Should fetch expense manager', () => {
            let state;
            state = reducer(state,fetchExpenseManagerSuccess(expenseManager));
            expect(state).toEqual({
                expense:expense,
                budget:budget,
                totalExpense:totalExpense
            });
        });
    });

    describe('fetchExpenseManagerError', () => {
        it('Should fetch expense manager error', () => {
            let state;
            state = reducer(state,fetchExpenseManagerError(error));
            expect(state.error).toEqual(
                'ERROR'
            );
        });
    });

});