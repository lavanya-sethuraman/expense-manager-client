import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { setBudget } from '../actions/expense-manager'
import SetBudgetModal from '../components/set-budget-modal';
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
let errorText = {};
export class SetBudget extends React.Component {

    validate(budget) {
        for (let category in budget) {
            if (budget[category] === 0) {
                errorText[category] = "Please enter a value.";
                
            }
            else {
                errorText[category] = "";
            }
        }
        return true;
    }

    setBudget(budget) {
        if (this.validate(budget)) {
            this.props.dispatch(setBudget(budget));
        }
    }

    render() {
        return (
            <div className="style">
                <h1>Set Budget</h1>
                <TextField
                    type="number"
                    min='0'
                    name='gas'
                    errorText={errorText.gas}
                    floatingLabelText="Gas"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.gas = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0.00'
                    errorText={errorText.water}
                    floatingLabelText="Water"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.water = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.electricity}
                    floatingLabelText="Electricity"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.electricity = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.rent}
                    floatingLabelText="Rent or Mortgage"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.rent = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.tv}
                    floatingLabelText="Television"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.tv = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.phone}
                    floatingLabelText="Phone"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.phone = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.groceries}
                    floatingLabelText="Groceries"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.groceries = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.restaurant}
                    floatingLabelText="Restaurant"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.restaurant = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.kids}
                    floatingLabelText="Kids"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.kids = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.travel}
                    floatingLabelText="Travel"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.travel = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    errorText={errorText.misc}
                    floatingLabelText="Miscellaneous"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.misc = parseFloat(e.currentTarget.value); }}
                />
                <br />
                <br />
                <SetBudgetModal budget={budget} setBudget={this.setBudget.bind(this)} validate={this.validate.bind(this)} />
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
