
const initialState = {
    budget: {
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
    },
    expense: []
};

export const expenseManagerReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_BUDGET':
            return Object.assign({}, state, { budget: action.budget });

        case 'ENTER_EXPENSE':
            return Object.assign({}, state, {
                expense: [...state.expense, {
                    ...action.expense
                }]
            });

        case 'TRACK_SPENDING':
            return state;
            
        default:
            return state
    }

};

