import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../index.css';


export class TrackSpending extends React.Component {

    render() {
        const totalExpense = this.props.expenseManager.totalExpense;
        const budget = this.props.expenseManager.budget;
        var categoriesWithAmt = _.map(totalExpense, 'category');

        function updateExpenses(item) {
            if (!_.includes(categoriesWithAmt, item)) {
                totalExpense.push({ category: item, amount: 0 })
            }
        }

        function updateBudget(item) {
            let trend = '';
            if (_.isEmpty(budget) ) {
                trend = 'Budget Not Set';
                (item['trend']) = trend;
            }
            else {
                item['budget'] = budget[item['category']];
                trend = (item['budget']) - (item['amount']);
                if (trend < 1) {
                    (item['trend']) = '$' + trend + "(Over the budget)";
                }
                else {
                    (item['trend']) = '$' + trend + '(remaining)';
                }
            }
        }

        _.forEach(Object.keys(budget), updateExpenses);
        _.map(totalExpense, updateBudget)

        const expenseTable = totalExpense.map((item, index) => (
            <TableRow key={index}>
                <TableRowColumn>{_.capitalize(item.category)}</TableRowColumn>
                <TableRowColumn>${item.amount}</TableRowColumn>
                <TableRowColumn>${item.budget}</TableRowColumn>
                <TableRowColumn>{item.trend}</TableRowColumn>
            </TableRow>
        ));
        return (
            <div className="styles">
                <h1>Track Expenses</h1>
                <Table fixedHeader={true}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn><h4>Category</h4></TableHeaderColumn>
                            <TableHeaderColumn><h4>Expenses</h4></TableHeaderColumn>
                            <TableHeaderColumn><h4>Budget</h4></TableHeaderColumn>
                            <TableHeaderColumn><h4>Balance</h4></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={true}>
                        {expenseTable}
                    </TableBody>
                </Table>
                <br />
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        loggedIn: currentUser !== null,
        userName: currentUser ? state.auth.currentUser.userName : '',
        name: currentUser
            ? `${currentUser.fullName}`
            : '',
        expenseManager: state.expenseManager
    };
};

export default connect(mapStateToProps)(TrackSpending);