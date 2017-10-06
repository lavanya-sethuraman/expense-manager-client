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
        // const totalExpense = this.props.expenseManager.totalExpense;
        // totalExpense.map((item,index) => (
        // <TableRow>
        //     <TableRowColumn>Gas</TableRowColumn>
        //     <TableRowColumn>0</TableRowColumn>
        // </TableRow>
        // ));

        console.log("track", this.props.expenseManager.totalExpense)
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
                        <TableRow>
                            <TableRowColumn>Gas</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Water</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Electricity</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Rent or Mortgage</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Television</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Phone</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Groceries</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Restaurant</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Kids</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Travel</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Miscellaneous</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                        </TableRow>
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