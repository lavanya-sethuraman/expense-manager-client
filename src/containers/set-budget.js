import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import SetBudgetModal from '../components/set-budget-modal';
import { setBudget } from '../actions/expense-manager';
import '../index.css';

let budget = {
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
let errText = {};

export class SetBudget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: {}
        }
    }

    validate(budget) {
        for (let category in budget) {
            if (budget[category] === 0 || isNaN(budget[category])) {
                errText[category] = "Required.";
            }
            else {
                errText[category] = "";
            }
        }
        this.setState({ error: errText });
    }


    setBudget(budget) {
        this.validate(budget);
        if (!Object.values(budget).some((value) => value === 0 || isNaN(value))) {
            this.props.dispatch(setBudget(budget));
        }
    }

    render() {
        return (
            <div className="style">
                <h1>Set Budget</h1>
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.gas}
                    name='gas'
                    floatingLabelText="Gas"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.gas = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.water}
                    floatingLabelText="Water"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.water = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.electricity}
                    floatingLabelText="Electricity"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.electricity = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.rent}
                    floatingLabelText="Rent or Mortgage"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.rent = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.tv}
                    floatingLabelText="Television"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.tv = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.phone}
                    floatingLabelText="Phone"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.phone = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.groceries}
                    floatingLabelText="Groceries"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.groceries = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.restaurant}
                    floatingLabelText="Restaurant"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.restaurant = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.kids}
                    floatingLabelText="Kids"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.kids = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.travel}
                    floatingLabelText="Travel"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.travel = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='1'
                    errorText={errText.misc}
                    floatingLabelText="Miscellaneous"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.misc = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <br />
                <SetBudgetModal budget={budget} setBudget={this.setBudget.bind(this)} />
                <br />
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    budget: state.expenseManager.budget
});

export default connect(mapStateToProps)(SetBudget);
