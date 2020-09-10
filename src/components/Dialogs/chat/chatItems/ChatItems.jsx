import React from 'react';
import s from "../../Dialogs.module.css";
import user from '../../../img/user.png';
//с onClick эксперементировал
const ChatItems = (props) => {

    return (
            <div className={s.dialog}>
                <img src={!props.photos ? user: props.photos} alt=""/>
                    {props.name} 
            </div>
    )
}



export default ChatItems;