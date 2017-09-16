import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { setBudget } from '../actions'
import SetBudgetModal from './SetBudgetModal';
import '../index.css';

const style = {
    height: 940,
    width: 900,
    marginTop: 20,
    marginLeft: 50,
    textAlign: 'center',
    display: 'inline-block',
};

export class SetBudget extends React.Component {

    setBudget(budget) {
        this.props.dispatch(setBudget(budget));
    }

    render() {
        let budget = Object.assign({}, this.props.budget);
        console.log("The Budget is set as: ", this.props.budget);
        return (
            <Paper style={style} zDepth={1}>
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
                <RaisedButton label="Set Budget" primary={true} onClick={() => { this.setBudget(budget) }} />
                <SetBudgetModal budget={this.props.budget}/>
                <br />
                <br />
            </ Paper>
        );
    }
}

const mapStateToProps = state => ({
    budget: state.budget
});

export default connect(mapStateToProps)(SetBudget);
