import React from 'react';
import '../index.css';

export default function About() {
    return (
        <div className="margin">
            <h1>Welcome to Expense Manager!</h1>
            <p> Track your expenses to know where your money is going. 
                  Expense Manager is a complete online money management tool designed to keep track of all your 
                  expenses. Sign up to get started!</p>
            <h4>Features:</h4>
            <ul>
              <li>Recurring bills such as your utilities, phone and cable can be budgeted.</li>
              <li>Non-recurring items can also be tracked and accounted for.</li>
              <li>Date-wise expense entry. </li>
              <li>Ability to record entries against each budget to see how much is left.</li>
              <li>We provide you with reports and graphs to help you understand your cash flow.</li>
            </ul>
        </div>
    );
}

