import axios from "axios";
import React from "react";
import { connect } from 'react-redux';
import Messages from "./Messages";
import { setChats, setUsersChats } from "../../Redux/chat-reducer";
import GetCookie from "../../hook/getCookie";

class MessagesContainer extends React.Component{
  async componentDidMount(){
    await axios.get('http://apeiron-test.kz/chat',{
        headers:{
        Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
        }
        }).then(response=>{
            this.props.setChats(response.data);
        })
    }
  render(){
    return(
      <div>
        <Messages Chats={this.props.Chats}/>
    </div>
  )
  }
}

let mapStateToProps = (state) => {
  return{
      Chats: state.ChatData.chats,
      UserInChat: state.ChatData.usersInChat
  }
} 

export default connect(mapStateToProps,{setChats,setUsersChats})(MessagesContainer);