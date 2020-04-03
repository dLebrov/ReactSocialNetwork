import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src="https://klike.net/uploads/posts/2018-05/1525256972_15.jpg" alt=""/>
            <NavLink to ={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}



export default DialogItem;