import React from 'react';
import Paper from 'material-ui/Paper';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux';
import { trackSpending } from '../actions'
import '../index.css';

const style = {
    height: 670,
    width: 900,
    marginTop: 20,
    marginLeft: 50,
    textAlign: 'center',
    display: 'inline-block',
};

export class TrackSpending extends React.Component {

    render() {
    this.props.dispatch(trackSpending());
    console.log('BUDGET',this.props.budget,'EXPENSE',this.props.expense)
    return (
            <Paper style={style} zDepth={1}>
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
            </Paper>
    );
}
}

const mapStateToProps = state => ({
    budget: state.budget,
    expense: state.expense
});

export default connect(mapStateToProps)(TrackSpending);