import React from 'react';
import s from "../../Dialogs.module.css";
import user from '../../../img/user.png';
const ChatItems = (props) => {
    return (
            <div className={s.chatDialog}>
                <img src={!props.photos ? user: props.photos} alt=""/>
                <div>{props.name}</div>
            </div>
    )
}



export default ChatItems;