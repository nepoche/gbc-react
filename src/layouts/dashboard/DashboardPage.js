import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../../store';
import WithLogin from '../../containers/WithLogin';
import { checkUser } from '../../firebase/auth';
import './Dashboard.css';
import { db } from '../../firebase';
import firebase from 'firebase/app';
import DashboardForm from './DashboardForm';

class Dashboard extends Component {

    constructor(props, context) {
        super(props);
        this.contracts = context.drizzle.contracts;
        checkUser();
    }

    componentWillMount() {

    }

    render() {

        const state = store.getState();
        console.log(state);

        return (
            <div>
                <h2 style={{textAlign: "center"}}>Dashboard Page</h2>
                <h4>We're currently adding functionality to the website for members.</h4>
                <h4>
                    We're experimenting with blockchain technology interaction in our website!
                    To interact further with the application, please download <a href="https://metamask.io">MetaMask</a> and connect to the rinkeby network.
                </h4>
                <div>
                    <DashboardForm />
                </div>
            </div>
        );
    }
}

Dashboard.contextTypes = {
    drizzle: PropTypes.object
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        GBAttendance: state.contracts.GBAttendance,
        drizzleStatus: state.drizzleStatus,
        user: state.user
    }
}

const DashboardPage = withRouter(WithLogin(drizzleConnect(Dashboard, mapStateToProps)));

export default DashboardPage;