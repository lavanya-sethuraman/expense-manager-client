import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import '../index.css';


export default class SetBudgetModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleOpen = () => {
        const { setBudget, budget } = this.props;
        let error = false;
        setBudget(budget);
        if (Object.values(budget).some((value) => value === 0 || isNaN(value))) {
            error = true;
        }
        if (error !== true) {
            this.setState({ open: true });
        }
    }
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
            <div className="center">
                <RaisedButton className="center" label="Set Budget" primary={true} onClick={this.handleOpen} />
                <Dialog
                    title="Budget Set!"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    Your Budget has been successfully set.

        </Dialog>
            </div>
        );
    }
}
