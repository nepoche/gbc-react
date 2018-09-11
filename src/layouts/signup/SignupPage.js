import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import store from '../../store'
import SignupForm from './SignupForm';
import { drizzleConnect } from 'drizzle-react'

class SignupPage extends Component {
    
    render () {

        const state = store.getState();

        if (state.user) {
            return (
                <Redirect to="/dashboard" />
            );
        }

        return (
            <div>
                <h1 style={{textAlign: "center"}}>Sign up!</h1>
                <SignupForm history={this.props.history} />
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        
    }
}

export default withRouter(drizzleConnect(SignupPage, mapStateToProps));