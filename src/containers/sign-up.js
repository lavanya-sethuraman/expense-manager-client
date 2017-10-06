import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { required, nonEmpty, isTrimmed } from '../validators';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import { connect } from 'react-redux';


export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            errorText1: "",
            errorText2: "",
            errorText3: ""
        };
        this.signUpDetails = { fullName: "", userName: "", password: "" };

    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({
            open: false,
            errorText1: "",
            errorText2: "",
            errorText3: ""
        });
    };

    validateFullName = (value) => {
        if (required(value)) {
            this.setState({ errorText1: required(value) })
            return false;
        }
        else if (nonEmpty(value)) {
            this.setState({ errorText1: nonEmpty(value) })
            return false;
        }
        else if (isTrimmed(value)) {
            this.setState({ errorText1: isTrimmed(value) })
            return false;
        }
        this.setState({ errorText1: "" })
        return true;
    }

    validateUserName = (value) => {
        if (required(value)) {
            this.setState({ errorText2: required(value) })
            return false;
        }
        else if (nonEmpty(value)) {
            this.setState({ errorText2: nonEmpty(value) })
            return false;
        }
        else if (isTrimmed(value)) {
            this.setState({ errorText2: isTrimmed(value) })
            return false;
        }
        this.setState({ errorText2: "" })
        return true;
    }

    validatePassword = (value) => {

        if (required(value)) {
            this.setState({ errorText3: required(value) })
            return false;
        }
        else if (nonEmpty(value)) {
            this.setState({ errorText3: nonEmpty(value) })
            return false;
        }
        else if (isTrimmed(value)) {
            this.setState({ errorText3: isTrimmed(value) })
            return false;
        }
        else if (value.length <= 4) {
            this.setState({ errorText3: "Cannot be less than 4 characters long" })
            return false;
        }
        else if (value.length >= 10) {
            this.setState({ errorText3: "Cannot be more than 10 characters long" })
            return false;
        }
        this.setState({ errorText3: "" })
        return true;
    }

    signUp = () => {
        if (this.validateFullName(this.signUpDetails.fullName) &&
            this.validateUserName(this.signUpDetails.userName) &&
            this.validatePassword(this.signUpDetails.password)) 
        {
            const {userName, password, fullName} = this.signUpDetails;
            const user = {userName, password, fullName};
            return this.props
                .dispatch(registerUser(user))
                .then((res) => {
                    if(res.reason === ""){
                        this.setState({ open: false });
                        this.props.dispatch(login(userName, password));
                        return;
                    }
                    else {
                        this.setState({ errorText2: res.message })
                    }
                })
                
        }

    }
    render() {
        const actions = [
            <FlatButton
                label="Sign Up"
                primary={true}
                onClick={this.signUp}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <FlatButton label="Sign-up" onClick={this.handleOpen} />
                <Dialog
                    title="Sign Up"
                    actions={actions}
                    modal={true}
                    autoScrollBodyContent={true}
                    open={this.state.open} >
                    <TextField
                        hintText="Full Name"
                        floatingLabelText="Name"
                        floatingLabelFixed={true}
                        errorText={this.state.errorText1}
                        onChange={(e) => { if (this.validateFullName(e.currentTarget.value)) { this.signUpDetails.fullName = e.currentTarget.value } }}
                    /><br />
                    <TextField
                        hintText="User Name"
                        floatingLabelText="User Name"
                        floatingLabelFixed={true}
                        errorText={this.state.errorText2}
                        onChange={(e) => { if (this.validateUserName(e.currentTarget.value)) { this.signUpDetails.userName = e.currentTarget.value } }}
                    /><br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                        errorText={this.state.errorText3}
                        onChange={(e) => { if (this.validatePassword(e.currentTarget.value)) { this.signUpDetails.password = e.currentTarget.value } }}
                    /><br />
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Signup);