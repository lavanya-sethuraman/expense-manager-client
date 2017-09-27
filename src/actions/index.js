export const SET_BUDGET = 'SET_BUDGET';
export const setBudget = (budget) => ({
    type: SET_BUDGET,
    budget
});

export const ENTER_EXPENSE = 'ENTER_EXPENSE';
export const enterExpense = (expense) => ({
    type: ENTER_EXPENSE,
    expense
});

export const TRACK_SPENDING = 'TRACK_SPENDING';
export const trackSpending = (expense,budget) => ({
    type: TRACK_SPENDING,
    expense,
    budget
});
