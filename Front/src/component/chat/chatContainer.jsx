import axios from "axios";
import React from "react";
import { connect } from 'react-redux';
import GetCookie from "../../hook/getCookie";
import Chat from "./chat";
import { setUsersChats, setUsersMessages, toggleIsFetching } from "../../Redux/chat-reducer";
import { useParams } from "react-router";
import Preloader from "../common/preloader/preloader";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
  

class ChatContainer extends React.Component{

async componentDidMount(){
    this.props.toggleIsFetching(true);
    let id = this.props.params['chatToken'];
    //console.log(this.props);
    await axios.get('http://apeiron-test.kz/getOneChat?ChatToken=' + id,{
        headers:{
          Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
        }
        }).then(response=>{
         //console.log(response.data);
            this.props.setUsersChats(response.data[0]);
            this.props.toggleIsFetching(false);
        })
    axios.get('http://apeiron-test.kz/message?ChatToken=' + id,{
      headers:{
        Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
      }
      }).then(response=>{
          this.props.setUsersMessages(response.data);
          //console.log(response.data);
      })
       //console.log(this.props.usersMessages);
    }
  render(){
    return(
      <>
      {this.props.isFetching ? <Preloader/>:null}
        <Chat userId={this.props.UserInChat.userId}
              userName={this.props.UserInChat.userName}
              userSecondName={this.props.UserInChat.userSecondName}
              login={this.props.UserInChat.login}
              userAvatarPath={this.props.UserInChat.userAvatarPath}
              userMessage={this.props.usersMessages}
              chatId={this.props.params['chatToken']}
              setUserMess={this.props.setUsersMessages}/>
    </>
  )
  }
}

let mapStateToProps = (state) => {
  return{
      UserInChat: state.ChatData.usersInChat,
      usersMessages: state.ChatData.usersMessages,
      isFetching: state.ChatData.isFetching,

  }
} 

let WithUrlDataContainerComponent = withParams(ChatContainer);

export default connect(mapStateToProps,{setUsersChats,setUsersMessages,toggleIsFetching})(WithUrlDataContainerComponent);