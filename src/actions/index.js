import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';


export const SET_BUDGET_SUCCESS = 'SET_BUDGET';
export const setBudgetSuccess = budget => ({
    type: SET_BUDGET_SUCCESS,
    budget
});

export const ENTER_EXPENSE_SUCCESS = 'ENTER_EXPENSE';
export const enterExpenseSuccess = expense => ({
    type: ENTER_EXPENSE_SUCCESS,
    expense
});

export const TRACK_SPENDING = 'TRACK_SPENDING';
export const trackSpending = (expense,budget) => ({
    type: TRACK_SPENDING,
    expense,
    budget
});


export const setBudget = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/protected/budget`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(setBudgetSuccess(data)))
        .catch(err => {
            return (err);
        });
    }

    export const enterExpense = () => (dispatch, getState) => {
        const authToken = getState().auth.authToken;
    
        return fetch(`${API_BASE_URL}/protected/expense`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({data}) => dispatch(setBudgetSuccess(data)))
            .catch(err => {
                return (err);
            });
        }