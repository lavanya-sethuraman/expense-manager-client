import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';

export default class SetBudgetModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleOpen = () => {
        const { setBudget, budget } = this.props;
        setBudget(budget);
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
                <RaisedButton label="Set Budget" primary={true} onClick={this.handleOpen} />
                <Dialog
                    title="Budget Set!"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                    onRequestClose={this.handleClose}>
                    <List>
                        <ListItem>Gas:${this.props.budget.gas}.00</ListItem>
                        <ListItem>Water:${this.props.budget.water}.00</ListItem>
                        <ListItem>Electricity:${this.props.budget.electricity}.00</ListItem>
                        <ListItem>Television:${this.props.budget.tv}.00</ListItem>
                        <ListItem>Rent:${this.props.budget.rent}.00</ListItem>
                        <ListItem>Phone:${this.props.budget.phone}.00</ListItem>
                        <ListItem>Groceries:${this.props.budget.groceries}.00</ListItem>
                        <ListItem>Kids:${this.props.budget.kids}.00</ListItem>
                        <ListItem>Travel:${this.props.budget.travel}.000</ListItem>
                        <ListItem>Restaurant:${this.props.budget.restaurant}.00</ListItem>
                        <ListItem>Miscellaneous:${this.props.budget.misc}.00</ListItem>
                    </List>
        </Dialog>
            </div>
        );
    }
}