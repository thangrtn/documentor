import React, { useState } from 'react';
import axios from 'axios';
import './login-style.css';

function FormLogin() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const LoginFunc = () => {
        axios.post('/authentication/signin', {
            username: Username,
            password: Password
        }).then((response) => {
            if(response.data.accessToken){
                localStorage.setItem('username', Username);
                localStorage.setItem('accessToken', response.data.accessToken);
                
                window.location.reload();
            }
        }).catch((error) => {
            console.error(error)
        }) 
    };

    return (
        <div className='form-login'>
            <h1 className='font_login'>LOGIN</h1>
            <div className='form-input'>
                <label className='input-lb'>Username</label>
                <input
                    className='text-input'
                    placeholder='username'
                    value={Username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                ></input>
            </div>
            <div className='form-input'>
                <label className='input-lb'>Password</label>
                <input
                    className='text-input'
                    placeholder='password'
                    type='password'
                    value={Password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                ></input>
            </div>
            <button
                className='btn-login'
                onClick={() => {LoginFunc();}}
            >
                LOGIN
            </button>
        </div>
    );
}

export default FormLogin;
