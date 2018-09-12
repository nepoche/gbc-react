import React, { Component } from 'react'
import { drizzleConnect } from 'drizzle-react'
import { withRouter } from 'react-router-dom'
import SignupForm from './SignupForm';
import NoLogin from '../../containers/NoLogin';

class SignupPage extends Component {
    
    render () {

        return (
            <div>
                <h1 style={{textAlign: "center"}}>Sign up!</h1>
                <SignupForm history={this.props.history} />
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts,
        user: state.user
    };
}

export default withRouter(NoLogin(drizzleConnect(SignupPage, mapStateToProps)));