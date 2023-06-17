import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import c from './Register.module.css';

const Register = (props) => {

    const [Name, setName] = useState('');
    const [SecondName, setSecondName] = useState('');
    const [Login, setLogin] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [passwordAccess, setPasswordAccess] = useState('');
    const [status, setStatus] = useState('');

    const SendInformationOnServer = () =>{
        const json = JSON.stringify({ 
            "name": Name,
            "secondName": SecondName,
            "login": Login,
            "Email":Email,
            "password": password,
         });
        axios.post('http://apeiron-test.kz/user', json).then(response => {
           console.log(response.data);
        })
    }

    return (
    <div className={c.Main}>
        <h1>Apeiron</h1>
        <div className={c.MainBlockInner}>
            <div className={c.RegisterBlock}>
                <h2>Registration</h2>
                <input 
                    type="text" 
                    name='Name' 
                    placeholder='Name'
                    value={Name} 
                    className={c.RegisterBlockInner}
                    onChange={(event) => setName(event.target.value)}
                />
                <input 
                    type="text" 
                    name='SecondName' 
                    placeholder='SecondName'
                    value={SecondName} 
                    className={c.RegisterBlockInner}
                    onChange={(event) => setSecondName(event.target.value)}
                />
                <input 
                    type="text" 
                    name='login' 
                    placeholder='Login'
                    value={Login} 
                    className={c.RegisterBlockInner}
                    onChange={(event) => setLogin(event.target.value)}
                />

                <input 
                    type="text" 
                    name='email' 
                    placeholder='Email'
                    value={Email} 
                    className={c.RegisterBlockInner}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input 
                    type="password" 
                    name='password' 
                    placeholder='password'
                    value={password} 
                    className={c.RegisterBlockInner}
                    onChange={(event) => setpassword(event.target.value)}
                />
                <input 
                    type="password" 
                    name='passwordAccess' 
                    placeholder='passwordAccess'
                    value={passwordAccess} 
                    className={c.RegisterBlockInner}
                    onChange={(event) => setPasswordAccess(event.target.value)}
                />
                <input 
                    type="text" 
                    name='status' 
                    placeholder='status'
                    value={status} 
                    className={c.RegisterBlockInner}
                    onChange={(event) => setStatus(event.target.value)}
                />

                {/* <input type="file" name="fiel" id="file"/> */}

                <div>{/*Date of Birth*/}</div>
                <button onClick={SendInformationOnServer} className={c.RegisterBlockBtn}>Register</button> 
                
            </div>
        </div>
    </div>
      
    
  );
}

export default Register;