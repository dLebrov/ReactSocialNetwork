import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import user from '../../img/user.png'

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src={!props.photos ? user: props.photos} alt=""/>
            <NavLink to ={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}



export default DialogItem;