import React from 'react';
import DashBoardHeader from './DashBoardHeader';
import SideBar from './SideBar';
import Paper from 'material-ui/Paper';
import "../index.css";

const USER = {
    userName: '<userName>'
}
const style = {
    height: 500,
    width: 900,
    marginTop: 20,
    marginLeft: 200,
    textAlign: 'center',
    display: 'inline-block',
};

export default function Home() {
    return (

        <div>
            <DashBoardHeader />
            <SideBar />
            <Paper style={style} zDepth={1}>
                <h1>Welcome {USER.userName}!</h1>
            </Paper>
        </div>

    );

}