import React from 'react';
import s from "./../Dialogs.module.css";

const Message = (props) => {
    return (<div>
        <div className={s.text}>{props.senderName} <span>:   </span> {props.message}</div>
    </div>)
}


export default Message;