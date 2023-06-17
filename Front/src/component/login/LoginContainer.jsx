import React from 'react';
import { connect } from 'react-redux';
import { addAuthActionCreater, updateNewAuthActionCreater, updateNewPassActionCreater, updateNewTokenActionCreater, updateNewUserAccessActionCreater, updateNewUserIdActionCreater } from '../../Redux/auth-reducer';
import Login from './Login';

let mapStateToProps = (state) => {
  // console.log(state);
  return{
      UserAcc: state.AuthData.UserAcc,
      // login: state.AuthData.login,
      // password: state.AuthData.password,
      // token: state.AuthData.newTokenText,
      // UserAccess: state.AuthData.newUserAccess,
      newAuthText: state.AuthData.newAuthText,
      newPassText: state.AuthData.newPassText,
      newTokenText: state.AuthData.newTokenText,
      newUserAccess: state.AuthData.newUserAccess,
      newId: state.AuthData.newId,
  }
} 

let mapDispatchToProps = (dispatch) => {
  return{
      updataNewAuthText: (text) => {
        let action = updateNewAuthActionCreater(text);
        dispatch(action);
      },
      updateNewPassText:(text) =>{
        let action = updateNewPassActionCreater(text);
        dispatch(action);
      },
      updateNewTokenText:(text) =>{
        let action = updateNewTokenActionCreater(text);
        dispatch(action);
      },
      updateUserAccessText:(text) =>{
        let action = updateNewUserAccessActionCreater(text);
        dispatch(action);
      },
      updateUserIdText:(text) =>{
        let action = updateNewUserIdActionCreater(text)
        dispatch(action);
      },
      addAuth: () => {
        dispatch(addAuthActionCreater());
      }
  }
} 

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginContainer;