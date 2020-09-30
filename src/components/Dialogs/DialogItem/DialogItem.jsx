import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink, Route, withRouter} from "react-router-dom";
import user from '../../img/user.png'


const DialogItem = (props) => {

    return (
            <NavLink style={{ textDecoration: 'none' }} to ={'/dialogs/' + props.id}>
                <div className={s.dialog}>
                    <img src={!props.photos ? user: props.photos} alt=""/>
                    <span className= {s.dialogMain}>{props.name}</span> 
                </div>
            </NavLink>
    )
}



export default DialogItem;