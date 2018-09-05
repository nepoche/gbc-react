import React from 'react';
import submit from './submit';
import { Field, reduxForm } from 'redux-form';
import './SignupForm.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="signupField">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            { touched && error && <span>{error}</span>}
        </div>
    </div>
)

let SignupForm = props => {

    const { handleSubmit, submitting, error } = props;

    return (
        <form onSubmit={handleSubmit(submit)} className="row">
            <div className="col-xs-6 col-xs-offset-3">
                <Field name="account" component={renderField} type="text" label="Ethereum Account"/>
            </div>
            <div className="col-xs-6 col-xs-offset-3">
                <Field name="email" component={renderField} type="text" label="Email"/>
            </div>
            <div className="col-xs-6 col-xs-offset-3">
                <Field name="password1" component={renderField} type="password" label="Password"/>
            </div>
            <div className="col-xs-6 col-xs-offset-3">
                <Field name="password2" component={renderField} type="password" label="Confirm Password"/>
            </div>
            <div className="col-xs-6 col-xs-offset-3 text-center">
                { error && <span className="error">{error}</span> }
            </div>
            <div className="col-xs-6 col-xs-offset-3 text-center">
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