import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import { store } from '../../store'
import LoginForm from './LoginForm';
import SignupLink from '../../components/SignupLink'
import { drizzleConnect } from 'drizzle-react'
import { loginUserSuccess } from '../../actions'

class LoginPage extends Component {

    render() {

        if (this.props.user != null) {
            return (
                <Redirect to="/dashboard" />
            )
        }

        return (
            <div>
                <LoginForm history={this.props.history} />
                <SignupLink />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        user: state.user,
    }
}

export default withRouter(drizzleConnect(LoginPage, mapStateToProps));