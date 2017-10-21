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
        
        const expenseTable = totalExpense.map((item,index) => (
        <TableRow key={index}>
            <TableRowColumn>{_.capitalize(item.category)}</TableRowColumn>
            <TableRowColumn>${item.amount}</TableRowColumn>
            <TableRowColumn>${item.amount}</TableRowColumn>
        </TableRow>
        ));
    return (
            <div className="styles">
                <h1>Track Expenses</h1>
                <Table fixedHeader={true}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn><h4>Catergory</h4></TableHeaderColumn>
                            <TableHeaderColumn><h4>Expenses</h4></TableHeaderColumn>
                            <TableHeaderColumn><h4>Budget</h4></TableHeaderColumn>
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