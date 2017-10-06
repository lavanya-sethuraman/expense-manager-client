import React from 'react';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const MenuDrawer = () => (
  <div className="hide">
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
    <Menu>
    <Link className="noLine" to={`/setbudget`}>
        <MenuItem primaryText="Set Budget" />
    </Link>
    
    <Link className="noLine" to={`/enterexpenses`}>
        <MenuItem primaryText="Enter Expenses" />
    </Link>
    
    <Link className="noLine" to={`/graphs`}>
        <MenuItem primaryText="Graphs and Charts" />
    </Link>
    
    <Link className="noLine" to={`/trackspending`}>
        <MenuItem primaryText="Track Spending" />
    </Link>
</Menu>  
    </IconMenu>
    </div>
);

export default MenuDrawer;