import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { setBudget } from '../actions/expense-manager'
import SetBudgetModal from '../containers/set-budget-modal';
import '../index.css';

export class SetBudget extends React.Component {

    setBudget(budget) {
        this.props.dispatch(setBudget(budget));
    }

    render() {
        let budget = {};
        return (
            <div className="style">
                <h1>Set Budget</h1>
                <TextField
                    type="number"
                    min='0'
                    name='gas'
                    floatingLabelText="Gas"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.gas = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Water"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.water = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Electricity"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.electricity = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Rent or Mortgage"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.rent = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Television"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.tv = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Phone"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.phone = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Groceries"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.groceries = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Restaurant"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.restaurant = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Kids"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.kids = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Travel"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.travel = e.currentTarget.value; }}
                />
                <br />
                <TextField
                    type="number"
                    min='0'
                    floatingLabelText="Miscellaneous"
                    floatingLabelFixed={true}
                    onChange={(e) => { budget.misc = e.currentTarget.value; }}
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
