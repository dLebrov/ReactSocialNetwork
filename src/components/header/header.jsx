import React from 'react';
import s from './header.module.css';
import logo2 from './../img/logo2.png';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>

            <img src={logo2} alt=''/>
            <div className={s.loginBlock}>
                { props.isAuth ?
                    <div> {props.login} <button onClick={props.logout} n>Logout</button></div>
                :<NavLink className={s.nav} to={'/login'}>
                    Авторизоваться
                </NavLink>}
            </div>

    </header>
}

export default Header;