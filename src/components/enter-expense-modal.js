import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

 let dialogMessage = "";
 let dialogTitle = "" ;

export default class EnterExpenseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleOpen = () => {
        const { enterExpense, expense } = this.props;
        if (expense.category === "") {
            dialogTitle = "Alert!";
            dialogMessage = "Please select a category." ;
        }
        else if (expense.amount === 0){
            dialogTitle = "Alert!";
            dialogMessage = "Please enter a valid amount." ;
        }
        else if (expense.date === ""){
            dialogTitle = "Alert!";
            dialogMessage = "Please select a date." ;
        }

        else {
            dialogMessage = `Expense entered for ${expense.category}.` ;
            dialogTitle = "Expense Entered!"
            enterExpense(expense);
        }
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
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
                    title={dialogTitle}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    {dialogMessage}
        </Dialog>
            </div>
        );
    }
}