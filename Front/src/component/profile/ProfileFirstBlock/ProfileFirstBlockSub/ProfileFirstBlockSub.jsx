import React from "react";
import c from './ProfileFirstBlockSub.module.css'
import axios from "axios";
import GetCookie from "../../../../hook/getCookie";
import { NavLink } from "react-router-dom";

const ProfileFirstBlockSub = (props) =>{
    let id = props.paramsId;
    let chatToken;
    async function CreateOrOpenChat() {
        await axios.post('http://apeiron-test.kz/chat?UserID=' + id,{},{
            headers:{
                Authorization:'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
            }
        }).then(response => {
           //console.log(response.data);
            chatToken = response.data;
            //console.log(chatToken);
            })
        
    }

    console.log(props);
    if(id == null){
      id = props.myId;
    }

    return<>
        {(props.myId != id) ? 
        <div className={c.ProfileSub}>
            {/* <button className={`${c.ProfileFirstBlockSubButton} ${c.Subscribe}`}>Подписаться</button> */}
            <div>
            {props.followed ? <button onClick={() => {
                console.log("click");
                props.unfollow(8);
                // axios.delete(https://social-network.samuraijs.com/api/1.0/follow/${u.id}, {
                //     withCredentials:true,
                //     headers: {
                //         "API-KEY": "465f0ec0-31a8-4d97-aac3-b690ef8dd1c4"
                //     }
                // })
                // .then(response =>{
                //     if(response.data.resultCode == 0) {
                //         props.unfollow(u.id);
                //     } 
                // });
                    // props.unfollow(u.id);

                }}>unFollow</button> 
                : <button onClick={() => {
                    console.log(props.followed);
                    props.follow(8);
                    // axios.post(https://social-network.samuraijs.com/api/1.0/follow/${u.id}, {}, {
                    //     withCredentials:true,
                    //     headers: {
                    //         "API-KEY": "465f0ec0-31a8-4d97-aac3-b690ef8dd1c4"
                    //     }
                    // })
                    // .then(response =>{
                    //     if(response.data.resultCode == 0) {
                    //         props.follow(u.id);
                    //     } 
                    // });

                }}>Follow</button>}
            </div>
            {/* <NavLink to={'/chat' + chatToken}> */}
                <button className={`${c.ProfileFirstBlockSubButton} ${c.Messages}`} onClick={CreateOrOpenChat} href="">Написать</button>
            {/* </NavLink> */}
           <button className={`${c.ProfileFirstBlockSubButton} ${c.More}`}>Больше</button>
        </div> : null
    }
    </>
        
}

export default ProfileFirstBlockSub;