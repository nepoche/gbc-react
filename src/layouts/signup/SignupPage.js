import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import store from '../../store'
import SignupForm from './SignupForm';
import { LoadingContainer } from 'drizzle-react-components';

class SignupPage extends Component {
    
    render () {

        const state = store.getState();

        if (state.login !== "") {

            return (
                <Redirect to="/dashboard" />
            );
        }

        return (
            <div>
                <h1 style={{textAlign: "center"}}>Sign up!</h1>
                <LoadingContainer>
                    <SignupForm history={this.props.history} />
                </LoadingContainer>
            </div>
        );

    }


}

export default withRouter(SignupPage);

