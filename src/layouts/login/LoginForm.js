import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from './submit';

import './LoginForm.css';

let LoginForm = props => {
    const { handleSubmit, submitting } = props;

    return (
        <form onSubmit={handleSubmit(submit)} >
            <div className="text-center">
                <label htmlFor="email">Email:</label>
                <Field name="email" component="input" type="text" className="loginField" />
            </div>
            <div className="text-center">
                <label htmlFor="password">Password:</label>
                <Field name="password" component="input" type="password" className="loginField" />
            </div>
            <div className="text-center">
                <button disabled={submitting} type="submit" className="loginButton">
                    Log in
                </button>
            </div>
        </form>
    );
};

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;