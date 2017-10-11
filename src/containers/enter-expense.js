import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Datepicker from '../components/date-picker';
import { connect } from 'react-redux';
import { enterExpense } from '../actions/expense-manager'
import EnterExpenseModal from '../components/enter-expense-modal';
import _ from 'lodash';
import '../index.css';

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
            category:'',
            amount:0,
            date: ""
        };
    }

    handleChange = (event, index, value) => { 
        this.setState({ value });
        this.setCategory(value); 
    }

    setCategory(value){
        const categories = [ 'gas','water','electricity','rent','tv','phone','groceries','restaurant','kids','travel','misc' ];
        const category = categories.filter(function(category,index){
                                                if(value-1 === index)
                                                return category; 
                                                else return "";});
        this.setState ({category:category[0]});

    }
    enterExpense(expense) {
        this.props.dispatch(enterExpense(expense));
    }

    render() {
        let {category, amount, date} = this.state;
        let expense = {category, amount, date};
        return (
            <div className="style">
                <h1>Enter Expenses</h1>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false} >
                    <MenuItem value={0} primaryText="Category" disabled/>
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
                    step={0.01}
                    min='0'
                    max="9999999"
                    floatingLabelText="Enter Expense"
                    floatingLabelFixed={true}
                   onInput={{/* e => 
                        e.target.value = 
                          //regex if string has 2 decimal then update e.target.value parseFloat(e.target.value).toFixed(2
                    } */}}
                    onChange={(e) => { this.setState({ amount: e.currentTarget.value }) }}
                />
                <br />
                <Datepicker  onChange={(e, date) => { this.setState({ date }) }} />
                <br />
                <EnterExpenseModal expense={expense} enterExpense={this.enterExpense.bind(this)} />
                <br />
                <br />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    expense: state.expenseManager.expense
});

export default connect(mapStateToProps)(EnterExpense);
