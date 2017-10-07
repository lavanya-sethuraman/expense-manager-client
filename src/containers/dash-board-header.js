import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import MenuDrawer from '../components/menu-drawer';

export class DashBoardHeader extends React.Component{
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    
    logOut() {
        console.log("dashboardheader logout",this.props)
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }
    render(){
    return (
        <AppBar title={<span>Expense Manager</span>}
            iconElementLeft={<MenuDrawer />}
            iconElementRight={<FlatButton label="Log Out" secondary={true} onClick={this.logOut}/>}
        />
    );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashBoardHeader);
