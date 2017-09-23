
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
    expense: [
        { value: 1, category: "gas", amount: "90", date: new Date()-5 },
        { value: 2, category: "water", amount: "80", date: new Date()-5 },
        { value: 3, category: "electricity", amount: "200", date: new Date()-5 },
        { value: 4, category: "rent", amount: "1500", date: new Date()-5 },
        { value: 5, category: "tv", amount: "90", date: new Date()-3 },
        { value: 6, category: "phone", amount: "90", date: new Date()-3 },
        { value: 7, category: "groceries", amount: "90", date: new Date()-10 },
        { value: 8, category: "restaurant", amount: "30", date: new Date()-5 },
        { value: 9, category: "kids", amount: "135", date: new Date()-7 },
        { value: 10, category: "travel", amount: "140", date: new Date()-20 },
        { value: 11, category: "misc", amount: "75", date: new Date()-6 },
        { value: 1, category: "gas", amount: "34", date: new Date() },
        { value: 11, category: "misc", amount: "72", date: new Date() },
        { value: 7, category: "groceries", amount: "69", date: new Date() },
        { value: 9, category: "kids", amount: "135", date: new Date() },
        { value: 10, category: "travel", amount: "190", date: new Date() }
    ]
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

