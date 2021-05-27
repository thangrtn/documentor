import React from 'react'
import FormSignIn from '../components/signin/form-login.js'
import '../components/signin/login-style.css';

const Signin = () => {
    return (
        <div className="signinelement">
            <div className="logo-bg">
            <FormSignIn/>
            </div>
        </div>
    )
}

export default Signin;