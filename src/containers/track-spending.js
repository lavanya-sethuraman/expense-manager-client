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
import '../index.css';


export class TrackSpending extends React.Component {

    render() {
        const totalExpense = this.props.expenseManager.totalExpense;
        const expenseTable = totalExpense.map((item,index) => (
        <TableRow key={index}>
            <TableRowColumn>{item.category}</TableRowColumn>
            <TableRowColumn>{item.amount}</TableRowColumn>
        </TableRow>
        ));
    return (
            <div className="style">
                <h1>Track Expenses</h1>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Catergory</TableHeaderColumn>
                            <TableHeaderColumn>Expenses</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
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