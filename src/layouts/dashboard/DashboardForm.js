import React from 'react';
import submit from './submit';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="signupField">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            { touched && error && <span>{error}</span>}
        </div>
    </div>
);

let DashboardForm = props => {

    const { handleSubmit, error } = props;

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="col-xs-6 col-xs-offset-3 text-center">
                <Field name="address" component={renderField} type="text" label="Ethereum Address"/>
            </div>
            <div className="col-xs-6 col-xs-offset-3 text-center">
                { error && <span className="error">{error}</span> }
            </div>
            <div className="col-xs-6 col-xs-offset-3 text-center">
                <button type="submit" className="requestApprovalButton" style={{width: "200px"}}>
                    Request Approval
                </button>
            </div>
        </form>
    )
}

DashboardForm = reduxForm({
    form: 'signup'
})(DashboardForm);

export default DashboardForm;