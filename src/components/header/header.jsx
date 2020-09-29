import React from 'react';
import s from './header.module.css';
import myLogo from './../img/myLogo.png';
import {NavLink} from "react-router-dom";
import exit from "../img/exit.png";
import user from "../img/user.png"

const Header = (props) => {
    return (
    <header className={s.header}>
            <NavLink to= "/profile">
                <img className={s.logo} src={myLogo} alt=''/>
            </NavLink>
            <div className={s.loginBlock}>
                { props.isAuth ?
                    <div className={s.isAuth}>
                        {props.photos !== null ? props.photos.small !==null ? <img className={s.photoUser} src={props.photos.small} alt=""/>: <img className={s.photoUser} src={user} alt=""/>: null}
                        <div className={s.name}>
                        {props.login}
                        </div>
                        <div className={s.button} onClick={props.logout}>
                                <img src={exit} alt=""/>
                            <span type = "text/css">Выйти</span>
                        </div>
                    </div>
                :<NavLink to={'/login'}>
                    <button className={s.logout}>Авторизоваться</button>
                </NavLink>}
            </div>

    </header>)
}

export default Header;