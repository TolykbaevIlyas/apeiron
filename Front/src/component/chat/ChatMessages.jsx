import React from "react";
import c from './ChatMessages.module.css';

const ChatMessages = (props) => {
  //console.log(props);
    return(
        <div className={c.MessageContainer}>
            <div className={(props.myId != props.userId) ? c.OtherUser : c.MeUser}>
              {props.message}
            </div>
      </div>
    );
}

export default ChatMessages;