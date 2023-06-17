import React from "react";
import secondHeader from './../../../assets/img/header.jpg'
import c from './MessagesLeftUsersChatBlock.module.css';
import { NavLink } from "react-router-dom";


const MessagesLeftUsersChatBlock = (props) => {
    let imageAvatar= 'http://apeiron-test.kz/' + props.userAvatar;
    let src = props.userAvatar;
    //console.log(props);
    return(
        <div className={c.MessageBlock}>
            <NavLink to={'/chat/' + props.chatToken}>
            <div className={c.UsersListMessagesChats}>
                <div className={c.AvatarInner}>
                    <img src={(src != undefined) ? imageAvatar : secondHeader}/>
                </div>
                <p>{props.userName} {props.userSecondName}</p>
                <div className={c.OnlineOflineBlock}></div>
            </div>
            </NavLink>
        </div>
        
        
    );
}

export default MessagesLeftUsersChatBlock;