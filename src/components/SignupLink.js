import React from 'react';
import { Link } from 'react-router-dom'

const RegisterLink = () => (
    <p className="text-center"> 
        Don't have an account?
        {' '}
        <Link to={"/signup"}>Sign up</Link>
    </p>
)

export default RegisterLink;