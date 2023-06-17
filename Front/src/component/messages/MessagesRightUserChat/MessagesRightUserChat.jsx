import React from "react";
import secondHeader from './../../../assets/img/header2.jpg'
import firstHeader from './../../../assets/img/header.jpg'
import c from './MessagesRightUserChat.module.css';

const MessagesRightUserChat = (props) => {
    return(
        <div className={c.ChatBlock}>
        <div className={c.SecondTextBlock}>
            <div className={c.SecondTextBlockInner}>
            <div className={c.SecondinnerImg}>
                <img src={secondHeader}/>
            </div>
            <div className={c.SecondProfileText}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi velit, quia porro, 
                quaerat itaque similique, aliquam cupiditate 
                praesentium esse voluptatem fugiat fuga assumenda eum. 
                Iste quod sequi dolore esse voluptas?</p>
            </div>
            </div>
        </div>
        <input type="text" />
        <button>Send</button>
    </div>
    );
}

export default MessagesRightUserChat;