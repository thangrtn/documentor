import React , {useState} from 'react';
import './form-login.css'

function FormLogin (){

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const LoginFunc = () => {
        console.log(Username , Password)
    }

    return (
        <div className="form-login">
            <input label="username" value={Username} onChange={(e) => {setUsername(e.target.value)}}></input>
            <input label="password" type="password" value={Password} onChange={(e) => {setPassword(e.target.value)}}></input>
            <button onClick={() => {LoginFunc()}}>LOGIN</button>
        </div>
    );
}

export default FormLogin;