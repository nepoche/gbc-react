import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../../store';
import { checkUser } from '../../firebase/auth';

class Dashboard extends Component {

    constructor(props, context) {
        super(props);
        this.contracts = context.drizzle.contracts;

        checkUser();
    }

    handleClick = () => {
        this.contracts.GBAttendance.methods.checkIn.cacheSend();
    }

    render() {

        const state = store.getState();
        console.log(state);

        if (state.user) {
            return (
                <div>
                    <h2>Dashboard Page</h2>
                    <h3>Click below to let us know you're here!</h3>
                    <LoadingContainer>
                        <button onClick={this.handleClick} >Check In</button>
                    </LoadingContainer>
                </div>
            );
        } else {
            return (
                <Redirect to='/' />
            )
        }
    }
}

Dashboard.contextTypes = {
    drizzle: PropTypes.object
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        GBAttendance: state.contracts.GBAttendance,
        drizzleStatus: state.drizzleStatus
    }
}

const DashboardPage = drizzleConnect(Dashboard, mapStateToProps);

export default DashboardPage;