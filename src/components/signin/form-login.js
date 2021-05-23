import React, { useState } from 'react';
import axios from 'axios';
import './form-login.css';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function FormLogin() {
    let history = useHistory();
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const LoginFunc = async () => {
        try {
            let res = await axios.post('/authentication/signin', {
                username: Username,
                password: Password
            });

            axios.defaults.headers.common['Authorization'] =
                res.data.accessToken;
            let user = jwt_decode(res.data.accessToken);
            localStorage.setItem('token', res.data.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            console.log(axios.defaults.headers.common['Authorization']);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
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
                onClick={() => {
                    LoginFunc();
                }}
            >
                LOGIN
            </button>
        </div>
    );
}

export default FormLogin;
