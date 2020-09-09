import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink, Route} from "react-router-dom";
import user from '../../img/user.png'
//с onClick эксперементировал
const DialogItem = (props) => {
    return (
        <NavLink to ={'/dialogs/' + props.id}>
            <div className={s.dialog} onClick = {()=> props.getFriendId(props.id)}>
                <img src={!props.photos ? user: props.photos} alt=""/>
                    {props.name} 
            </div>
        </NavLink>
    )
}



export default DialogItem;