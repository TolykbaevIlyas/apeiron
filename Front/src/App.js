import React from 'react';
import c from './App.css';
import {
  Router,
  Route,
  BrowserRouter,
  Routes,
  redirect,
} from "react-router-dom";

import Header from './component/header/Header';
import Home from './component/home/Home';
import Noticfication from './component/noticfication/Noticfication';
import NewPost from './component/newpost/NewPost'
import Features from './component/features/Features'
import Music from './component/music/Music'
import Register from './component/Register/Register';
import { RequireAuth } from './hoc/RequireAuth';
import LoginContainer from './component/login/LoginContainer';
import { AuthProvider } from './hoc/AuthProvider';
import ProfileContainerFf from './component/profile/ProfileContainer';
import GlobalContainer from './component/global/GlobalContainer';
import HeaderContainerE from './component/header/HeaderContainer';
import MessagesContainer from './component/messages/MessagesContainer';
import Chat from './component/chat/chat';
import ChatContainer from './component/chat/chatContainer';

const App = (props) => {

  

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainerE/>
          <div className='app-wrapper-content'>
          <AuthProvider>
            <Routes>
              {/* <Route exact path='/' render={() => {
                return(
                  <redirect to="/home"></redirect>
                )
              }}/> */}
              <Route path="/home" element={
                <RequireAuth>
                  <Home/>
                </RequireAuth>
              }></Route>

              <Route path="/global" element={
                <RequireAuth>
                  <GlobalContainer/>
                </RequireAuth>
                }></Route>

              <Route path="/messages" element={
                <RequireAuth >
                  <MessagesContainer/>
                </RequireAuth>
              }></Route>

              <Route path="/chat/:chatToken" element={
                <RequireAuth >
                  <ChatContainer/>
                </RequireAuth>
              }></Route>

              <Route path="/noticfication" element={
                <RequireAuth>
                  <Noticfication/>
                </RequireAuth>
              }></Route>

              <Route path="/newpost" element={
                <RequireAuth>
                  <NewPost/>
                </RequireAuth>
              }></Route>

              <Route path="/features" element={
                <RequireAuth>
                  <Features/>
                </RequireAuth>
              }></Route>

              <Route path="/music" element={
                <RequireAuth>
                  <Music/>
                </RequireAuth>
              }></Route>

              <Route path="/profile/:userId?" element={
                <RequireAuth>
                  <ProfileContainerFf/>
                </RequireAuth>
              }></Route>

              <Route path="/register" element={
                <Register/>
              }></Route>
              <Route path="/login" element={
                <LoginContainer/>
              }></Route>
            </Routes>
          </AuthProvider>
          </div>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
