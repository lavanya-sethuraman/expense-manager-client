import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Datepicker from './DatePicker';
import { connect } from 'react-redux';
import { enterExpense } from '../actions'
import '../index.css';

const style = {
    height: 350,
    width: 900,
    marginTop: 20,
    marginLeft: 50,
    textAlign: 'center',
    display: 'inline-block',
};
const styles = {
    customWidth: {
        width: 200,
    },
};

export class EnterExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            amount: 0,
            date: new Date()
        };
    }

    handleChange = (event, index, value) => { this.setState({ value }); }

    enterExpense(expense) {
        this.props.dispatch(enterExpense(expense));
    }

    render() {
        let expense = Object.assign({}, this.state);
        
        return (
            <Paper style={style} zDepth={1}>
                <h1>Enter Expenses</h1>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false} >
                    <MenuItem value={0} primaryText="Category" />
                    <MenuItem value={1} primaryText="Gas" />
                    <MenuItem value={2} primaryText="Water" />
                    <MenuItem value={3} primaryText="Electricity" />
                    <MenuItem value={4} primaryText="Rent/Mortgage" />
                    <MenuItem value={5} primaryText="Television" />
                    <MenuItem value={6} primaryText="Phone" />
                    <MenuItem value={7} primaryText="Groceries" />
                    <MenuItem value={8} primaryText="Restaurant" />
                    <MenuItem value={9} primaryText="Kids" />
                    <MenuItem value={10} primaryText="Travel" />
                    <MenuItem value={11} primaryText="Miscellaneous" />
                </DropDownMenu>
                <br />
                <TextField
                    hintText="Amount"
                    type="number"
                    min='0'
                    floatingLabelText="Enter Expense"
                    floatingLabelFixed={true}
                    onChange={(e) => { this.setState({ amount: e.currentTarget.value }) }}
                />
                <br />
                <Datepicker onChange={(e, date) => { this.setState({ date }) }} />
                <br />
                <RaisedButton label="Enter Expense" primary={true} onClick={() => { this.enterExpense(expense); }} />
                <br />
                <br />
            </Paper>
        );
    }
}
const mapStateToProps = state => ({
    expense: state.expense
});

export default connect(mapStateToProps)(EnterExpense);
