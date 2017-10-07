import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '../containers/home';
import DashBoard from '../containers/dash-board';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { refreshAuthToken } from '../actions/auth';
import "../index.css";


export class ExpenseManager extends React.Component {
    componentDidMount() {
        if (this.props.hasAuthToken) {
            this.props.dispatch(refreshAuthToken());
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <main>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/dashboard" component={DashBoard} />
                            <Route exact path="/setbudget" component={DashBoard} />
                            <Route exact path="/enterexpenses" component={DashBoard} />
                            <Route exact path="/trackspending" component={DashBoard} />
                            <Route exact path="/graphs" component={DashBoard} />
                        </main>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(ExpenseManager);

