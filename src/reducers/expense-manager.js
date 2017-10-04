const initialState = {
    budget: {},
    expense: []
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_EXPENSE_MANAGER_SUCCESS':
            return Object.assign({}, state, {
                budget: action.data.budget,
                expense: action.data.expense
            });

        case 'FETCH_EXPENSE_MANAGER_ERROR':
            return Object.assign({}, state, {
                error: action.error
            });
        
        case 'SET_BUDGET_SUCCESS':
        return Object.assign({}, state, {
           budget: action.data.budget 
        });

        case 'ENTER_EXPENSE_SUCCESS':{
        return Object.assign({}, state, {
          expense: action.data.expense
        });}
        
        default:
            return state
    }

}
