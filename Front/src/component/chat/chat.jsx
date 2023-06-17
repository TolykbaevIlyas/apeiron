import React, { useState } from "react";
import c from './chat.module.css';
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import store from "../../Redux/redux-store";
import imgHead from './../../assets/img/header.jpg';
import ChatMessages from "./ChatMessages";
import GetCookie from "../../hook/getCookie";


const Chat = (props) => {
    //console.log(props);
    //console.log(props.usersInChat);
    let id = props.chatId;
    const [message, setMessage] = useState('');

    async function SendMessage(){
        const json = JSON.stringify({ 
            "message": message,
         });
        await axios.post('http://apeiron-test.kz/message?ChatToken='+ id, json ,{
            headers:{
              Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
            }
          }).then(response=>{
            GetMessage();
            setMessage(" ");
         })
    }

    async function GetMessage(){
        axios.get('http://apeiron-test.kz/message?ChatToken=' + id,{
        headers:{
            Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
        }
        }).then(response=>{
          props.setUserMess(response.data);
            //console.log(response.data);
        })
    }

    let imageAvatar;
    let src ;
    let MessagesData;
    if(props.userAvatarPath != null){
        imageAvatar = 'http://apeiron-test.kz/' + props.userAvatarPath;
        src = props.userAvatarPath;
    }

    if( props.userMessage != undefined){
        MessagesData = props.userMessage.map(post => <ChatMessages key={post.id} userId={post.userId} userName={post.userName} userSecondName={post.userSecondName} login={post.login} userAvatarPath={post.userAvatarPath} message={post.message} myId={post.yourId}/>)
    }


    return(
        <div className={c.Main}>
            <div className={c.ChatBox}>
                <div className={c.ChatUpperBlock}>
                    <div className={c.ChatUpperBlockFeatures}>Back</div>
                    <div className={c.ChatUpperBlockFeatures}>{props.userName} {props.userSecondName}</div>
                    <div className={c.ChatUpperBlockImg}>
                        <img src={(src != undefined) ? imageAvatar : imgHead} alt="" />
                        </div>
                </div>
                <div>
                    <div>
                       {MessagesData}
                    </div>
                    <div className={c.SendBlock}>
                        <textarea  onChange={(event) => setMessage(event.target.value)} value={message}>
                        </textarea>
                        <button onClick={SendMessage}>Send</button>
                    </div>
                </div>
            </div>
            
      </div>
    );
}

export default Chat;