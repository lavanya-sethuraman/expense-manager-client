import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Sign Up"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Sign-up" primary={true} onClick={this.handleOpen} />
                <Dialog
                    title="Sign Up"
                    actions={actions}
                    modal={true}
                    open={this.state.open} >
                    <TextField
                        hintText="Full Name"
                        floatingLabelText="Name"
                        floatingLabelFixed={true}
                    /><br />
                    <TextField
                        hintText="example@gmail.com"
                        floatingLabelText="Gmail Id"
                        floatingLabelFixed={true}
                    /><br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                    /><br />
                </Dialog>
            </div>
        );
    }
}
