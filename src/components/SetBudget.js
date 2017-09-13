import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import DashBoardHeader from './DashBoardHeader';
import SideBar from './SideBar';
import '../index.css';

const style = {
    width: 900,
    marginTop: 20,
    marginLeft: 200,
    textAlign: 'center',
    display: 'inline-block',
};

export default function SetBudget(props) {
    return (
        <div>
            <DashBoardHeader />
            <SideBar />
            <Paper style={style} zDepth={1}>
                <h1>Set Budget</h1>
                <TextField
                    /* defaultValue={props.budget.gas} */
                    floatingLabelText="Gas"
                    floatingLabelFixed={true}
                    onChange={(e) => { console.log(e.currentTarget.value); }}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.water} */
                    floatingLabelText="Water"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.electricity} */
                    floatingLabelText="Electricity"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.rent} */
                    floatingLabelText="Rent or Mortgage"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.tv} */
                    floatingLabelText="Television"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.phone} */
                    floatingLabelText="Phone"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.groceries} */
                    floatingLabelText="Groceries"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.restaurant} */
                    floatingLabelText="Restaurant"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.kids} */
                    floatingLabelText="Kids"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.travel} */
                    floatingLabelText="Travel"
                    floatingLabelFixed={true}
                />
                <br />
                <TextField
                    /* defaultValue={props.budget.misc} */
                    floatingLabelText="Miscellaneous"
                    floatingLabelFixed={true}
                />
                <br />
                <br />
                <RaisedButton label="Set Budget" primary={true} />
                <br />
                <br />
            </ Paper>
        </div>
    );
}
SetBudget.defaultProps = {
        gas:100.00,
        water:60.00,
        electricity:150.00,
        rent:1500.00,
        tv:100.00,
        phone:120.00,
        groceries:500.00,
        restaurant:100.00,
        kids:500.00,
        travel:200.00,
        misc:100.00
}
