import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import { store } from '../../store'
import LoginForm from './LoginForm';
import SignupLink from '../../components/SignupLink'
import { LoadingContainer } from 'drizzle-react-components'
import { drizzleConnect } from 'drizzle-react'

class LoginPage extends Component {

    render() {

        const state = store.getState();

        console.log(state);

        if (state.login !== "") {
            return (
                <Redirect to="/dashboard" />
            )
        }

        return (
            <div>
                <LoadingContainer>
                    <LoginForm history={this.props.history} />
                </LoadingContainer>
                <SignupLink />
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