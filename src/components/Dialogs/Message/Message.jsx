import React from 'react';
import s from "./../Dialogs.module.css";

const Message = (props) => {
    return (<div>
        <div className={s.text}><div className={s.userName}>{props.senderName}: </div> <div className={s.userMessage}>{props.message}</div></div>
    </div>)
}


export default Message;