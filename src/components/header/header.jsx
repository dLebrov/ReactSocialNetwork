import React from 'react';
import s from './header.module.css';
import myLogo from './../img/myLogo.png';
import {NavLink} from "react-router-dom";
import exit from "../img/exit.png";

const Header = (props) => {
    return (
    <header className={s.header}>

            <img className={s.logo} src={myLogo} alt=''/>
            <div className={s.loginBlock}>
                { props.isAuth ?
                    <div className={s.isAuth}>
                        <div className={s.name}>
                        {props.login}
                        </div>
                        <div className={s.button} onClick={props.logout}>
                            <img src={exit} alt=""/>
                            <span type = "text/css">Выйти</span>
                        </div>
                    </div>
                :<NavLink className={s.nav} to={'/login'}>
                    <button className={s.button}>Авторизоваться</button>
                </NavLink>}
            </div>

    </header>)
}

export default Header;