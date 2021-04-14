import React from 'react'
import FormSignIn from '../components/signin/form-login'
const Signin = () => {
    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '90vh'
        }}>
            <FormSignIn/>
        </div>
    )
}

export default Signin;