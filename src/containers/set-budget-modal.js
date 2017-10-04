import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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
                    onRequestClose={this.handleClose}>
                    Your Budget has been successfully set.
        </Dialog>
            </div>
        );
    }
}