import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink, Route, withRouter} from "react-router-dom";
import user from '../../img/user.png'
const DialogItem = (props) => {

    return (
        <NavLink to ={'/dialogs/' + props.id}>
            <div className={s.dialog}>
                <img src={!props.photos ? user: props.photos} alt=""/>
                    {props.name} 
            </div>
        </NavLink>
    )
}



export default DialogItem;