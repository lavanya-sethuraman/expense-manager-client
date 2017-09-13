import React from 'react';
import Header from './Header';
import Container from './Container';
import SideBar from './SideBar';
import SetBudget from './SetBudget';
import EnterExpense from './EnterExpense';
import TrackSpending from './TrackSpending';
import "../index.css";

export default class ExpenseManager extends React.Component {
    
    render() {
        const EXPENSES = {
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
    };
    const BUDGET = {
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
    };
        return (
            <div>
                <Header />
                <SideBar />
                <Container />
                <SetBudget budget={BUDGET}/>
                <EnterExpense />
                <TrackSpending expenses={EXPENSES}/>
            </div>
        );
    }

}