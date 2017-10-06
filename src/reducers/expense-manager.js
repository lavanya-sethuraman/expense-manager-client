const initialState = {
    budget: {},
    expense: [],
    totalExpense:{}
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_EXPENSE_MANAGER_SUCCESS':{
            return Object.assign({}, state, {
                budget: action.data.budget,
                expense: action.data.expense,
                totalExpense: action.data.totalExpense
            });
        }
        case 'FETCH_EXPENSE_MANAGER_ERROR':
            return Object.assign({}, state, {
                error: action.error
            });
        
        default:
            return state
    }

}
