import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import RemoveCookie from '../../hook/removeCookie';
import SetCookie from '../../hook/setCookie';
import { useAuth } from '../../hook/useAuth';
import store from '../../Redux/redux-store';
import c from './Login.module.css';

const Login = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    async function SendInformationOnServerT(){
        const json = JSON.stringify({ 
            "login": newAuthElement.current.value,
            "password": newPassElement.current.value,
         });
        await  axios.post('http://apeiron-test.kz/auth/login', json).then(response => {
            props.updateNewTokenText(response.data.token);
            props.updateUserAccessText(response.data.UserAccess);
            props.updateUserIdText(response.data.userID);
            RemoveCookie('usrin');
            SetCookie('usrin', JSON.stringify(response.data));
            //console.log(response.data);
            })
        onAddPost();
        Authtorization();
        //console.log(props);

    }

    const Authtorization = () =>{
        const AuthAccess = store.getState().AuthData.UserAcc['0'];
        signIn(AuthAccess, () => navigate(fromPage,{replace:true}));

    }

    let newAuthElement = React.createRef();
    let newPassElement = React.createRef();
  
    let onAddPost = () => {
        props.addAuth();
    }
  
    let onAuthChange = () =>{
        let text = newAuthElement.current.value;
        props.updataNewAuthText(text);
    }

    let onPassChange = () =>{
        let pass = newPassElement.current.value;
        props.updateNewPassText(pass);
    }

    return (
    <div className={c.Main}>
        <h1>Apeiron</h1>
        <div className={c.MainBlockInner}>
            <div className={c.RegisterBlock}>
                <h2>Authorization</h2>

                {/* <input 
                    ref={newPostElement}
                    type="text" 
                    name='login' 
                    placeholder='Login'
                    value={Login} 
                    className={c.RegisterBlockInner}
                    onChange={(event) => setLogin(event.target.value)}
                /> */}

                <input 
                    ref={newAuthElement}
                    onChange={onAuthChange}
                    type="text" 
                    name='login' 
                    placeholder='Login'
                    value={props.newAuthText}
                    className={c.RegisterBlockInner}
                />

                <input 
                    ref={newPassElement}
                    type="password" 
                    name='password' 
                    placeholder='password'
                    value={props.newPassText} 
                    className={c.RegisterBlockInner}
                    onChange={onPassChange}
                />

                <div>{/*Date of Birth*/}</div>
                <button onClick={SendInformationOnServerT} className={c.RegisterBlockBtn}>Login</button> 
                <a href="/register" className={c.GoToRegister}>Перейти на страницу регистраций</a>
            </div>
        </div>
    </div>
      
    
  );
}

export default Login;