import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class SetBudgetModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
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
                <RaisedButton label="budget" onClick={this.handleOpen} />
                <Dialog
                    title="Budget Set!"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Gas: ${this.props.budget.gas}.00
                    Water:${this.props.budget.water}.00
                    Electricity:${this.props.budget.electricity}.00
                    Television:${this.props.budget.tv}.00
                    Rent:${this.props.budget.rent}.00
                    Phone:${this.props.budget.phone}.00
                    Groceries:${this.props.budget.groceries}.00
                    Kids:${this.props.budget.kids}.00
                    Travel:${this.props.budget.travel}.00
                    Restaurant:${this.props.budget.restaurant}.00
                    Miscellaneous:${this.props.budget.misc}.00
        </Dialog>
            </div>
        );
    }
}