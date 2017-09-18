import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';


export default class EnterExpenseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleOpen = () => {
        const { enterExpense, expense } = this.props;
        enterExpense(expense);
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        console.log(this.props.expense.category)
        const actions = [
            <FlatButton
                label="Okay!"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        return (
            <div>
                <RaisedButton label="Enter Expense" primary={true} onClick={this.handleOpen} />
                <Dialog
                    title="Expense has been entered!"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    
                    Spent:{this.props.expense.amount}
                    
        </Dialog>
            </div>
        );
    }
}