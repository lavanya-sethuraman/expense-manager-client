import React from 'react';
import Header from './Header';
import Container from './Container';
import SideBar from './SideBar';
import "../index.css";

class ExpenseManager extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <Container />
            </div>
        );
    }
}
export default ExpenseManager;