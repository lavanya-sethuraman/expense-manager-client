import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
   
export const FETCH_EXPENSE_MANAGER_SUCCESS = 'FETCH_EXPENSE_MANAGER_SUCCESS';
export const fetchExpenseManagerSuccess = data => ({
    type: FETCH_EXPENSE_MANAGER_SUCCESS,
    data
});

export const FETCH_EXPENSE_MANAGER_ERROR = 'FETCH_EXPENSE_MANAGER_ERROR';
export const fetchExpenseManagerError = error => ({
    type: FETCH_EXPENSE_MANAGER_ERROR,
    error
});

export const setBudget = budget => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/budget`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(budget)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchExpenseManagerSuccess(data)))
        .catch(err => {
                return (err);
        });
}

export const enterExpense = expense => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/expense`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(expense)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchExpenseManagerSuccess(data)))
        .catch(err => {
                return (err);
        });
}

export const fetchExpenseManager = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/protected`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchExpenseManagerSuccess(data)))
        .catch(err => {
            dispatch(fetchExpenseManagerError(err));
        });
};
