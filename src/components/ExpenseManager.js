import React from 'react';
import Header from './Header';
import Container from './Container';
import SideBar from './SideBar';
import SetBudget from './SetBudget';
import EnterExpense from './EnterExpense';
import "../index.css";

class ExpenseManager extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <Container />
                <SetBudget />
                <EnterExpense />
            </div>
        );
    }
}
export default ExpenseManager;