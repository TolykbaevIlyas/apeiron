import React from "react";
import secondHeader from './../../assets/img/header2.jpg'
import firstHeader from './../../assets/img/header.jpg'
import c from './Messages.module.css';
import MessagesLeftUsersChatBlock from "./MessagesLeftUsersChatBlock/MessagesLeftUsersChatBlock";
import MessagesRightUserChat from "./MessagesRightUserChat/MessagesRightUserChat";
import GetCookie from "../../hook/getCookie";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";


const Messages = (props) => {

  let ChatData = props.Chats.map(post => <MessagesLeftUsersChatBlock key={post.chatId} chatToken={post.chatToken} login={post.login} 
    userId={post.userId} userName={post.userName} userSecondName={post.userSecondName} userAvatar={post.userAvatarPath}/>)

  //console.log(props);
    return(
        <div className={c.Main}>
          {/* <MessagesLeftUsersChatBlock/> */}
          <div>
            {ChatData}
          </div>
          {/* <NavLink to={'/profile/' + props.id}>
            <MessagesRightUserChat/>
          </NavLink> */}
      </div>
    );
}

export default Messages;