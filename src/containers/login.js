import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {login} from '../actions/auth';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import '../index.css';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            errorText: ""
        };
        this.values = { userName: "", password: "" };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    demo = () => {
        swal("Demo Log-in Details", "UserName: test , Pwd: 12345");        
    };


    login = () => {
         this.props.dispatch(login(this.values.userName, this.values.password))
         .then(res => {
            if (res !== undefined){
                this.setState({ errorText:"Incorrect User Name or password" });
            } 
        })
       
    }
    render() {
        const actions = [
            <FlatButton
                label="Log-in"
                primary={true}
                onClick={this.login}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.handleClose}  
            />,
            <FlatButton
            label="Demo"
            primary={true}
            onClick={this.demo}  
        />
        ];
        return (
            <div className="align">
                <FlatButton style={{color:'white'}} label="Log-in" onClick={this.handleOpen} />
                <Dialog
                    title="Log in to get started."
                    actions={actions}
                    modal={true}
                    autoScrollBodyContent={true}
                    open={this.state.open} >
                    <TextField
                        hintText="User Name"
                        floatingLabelText="User Name"
                        floatingLabelFixed={true}
                        onChange={(e) => { this.values.userName = e.currentTarget.value } }
                        errorText={this.state.errorText}
                    /><br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                        onChange={(e) => { this.values.password = e.currentTarget.value } }
                    /><br />
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);