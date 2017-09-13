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
import '../index.css';

const style = {
    width: 900,
    marginTop: 20,
    marginLeft: 200,
    textAlign: 'center',
    display: 'inline-block',
};

export default function TrackSpending(props) {
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
                        <TableRowColumn>{props.expenses.gas}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Water</TableRowColumn>
                        <TableRowColumn>{props.expenses.water}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Electricity</TableRowColumn>
                        <TableRowColumn>{props.expenses.electricity}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Rent or Mortgage</TableRowColumn>
                        <TableRowColumn>{props.expenses.rent}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Television</TableRowColumn>
                        <TableRowColumn>{props.expenses.tv}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Phone</TableRowColumn>
                        <TableRowColumn>{props.expenses.phone}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Groceries</TableRowColumn>
                        <TableRowColumn>{props.expenses.groceries}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Restaurant</TableRowColumn>
                        <TableRowColumn>{props.expenses.restaurant}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Kids</TableRowColumn>
                        <TableRowColumn>{props.expenses.kids}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Travel</TableRowColumn>
                        <TableRowColumn>{props.expenses.travel}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Miscellaneous</TableRowColumn>
                        <TableRowColumn>{props.expenses.misc}</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>

        </Paper>
    );
}

