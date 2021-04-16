import React from 'react'
import FormSignIn from '../components/Signin/form-login'
import '../components/Signin/form-login.css';

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