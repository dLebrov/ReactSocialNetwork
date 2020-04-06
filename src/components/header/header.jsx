import React from 'react';
import s from './header.module.css';
import logo2 from './../img/logo2.png';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>

            <img src={logo2} alt=''/>
            <div className={s.loginBlock}>
                { props.isAuth ?
                    <div className={s.isAuth}>
                        <div className={s.name}>
                        {props.login}
                        </div>
                        <button type = "text/css" className={s.button} onClick={props.logout}>Выйти</button>
                    </div>
                :<NavLink className={s.nav} to={'/login'}>
                    <button className={s.button}>Авторизоваться</button>
                </NavLink>}
            </div>

    </header>
}

export default Header;