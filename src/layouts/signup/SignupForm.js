import React, { Component } from 'react';
import submit from './submit';
import { Field, reduxForm } from 'redux-form';
import './SignupForm.css';

let SignupForm = props => {

    const { handleSubmit, submitting } = props;

    return (
        <form onSubmit={handleSubmit(submit)} >
            <div className="text-center">
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="text" className="signupField" />
            </div>
            <div className="text-center">
                <label htmlFor="password1">Password</label>
                <Field name="password1" component="input" type="password" className="signupField" />
            </div>
            <div className="text-center">
                <label htmlFor="password2">Confirm Password</label>
                <Field name="password2" component="input" type="password" className="signupField" />
            </div>
            <div className="text-center">
                <button disabled={submitting} type="submit" className="signupButton" >
                    Sign up
                </button>
            </div>
        </form>
    );
};

SignupForm = reduxForm({
    form: 'signup'
})(SignupForm);

export default SignupForm;