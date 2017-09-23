import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class DashBoardHeader extends React.Component{
    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }
    render(){
    return (
        <AppBar title={<span >Expense Manager</span>}
            iconElementLeft={<Avatar src="" size={30} />}
            iconElementRight={<RaisedButton label="Log Out" secondary={true} onClick={this.logOut()}/>}
        />
    );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashBoardHeader);
