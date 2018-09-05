import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import { store } from '../../store'
import LoginForm from './LoginForm';
import SignupLink from '../../components/SignupLink'
import { drizzleConnect } from 'drizzle-react'
import { LoadingContainer } from 'drizzle-react-components';

class LoginPage extends Component {

    render() {

        const state = store.getState();
        console.log(state);

        if (state.user != null) {
            return (
                <Redirect to="/dashboard" />
            )
        }

        return (
            <div>
                <LoginForm history={this.props.history} />
                <SignupLink />
                <LoadingContainer>
                </LoadingContainer>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default withRouter(drizzleConnect(LoginPage, mapStateToProps));