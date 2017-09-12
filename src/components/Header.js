import React from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.Component {
    render() {
        return (
            <AppBar title={<span >Expense Manager</span>}
                    iconElementLeft={<Avatar src="" size={30} />}
                    iconElementRight={ <div><RaisedButton label="Sign-up" primary={true}/>
                                       <RaisedButton label="Log-in" primary={true} /></div>} 
             />
        );
    }
}
export default Header;
