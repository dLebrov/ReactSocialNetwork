import React from 'react';
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";
import profile from "./../img/profile.png";
import news from "./../img/news.png";
import message from "./../img/message.png";
import music from "./../img/music.png";
import setting from "./../img/setting.png";
import usersSearch from '../img/userssearch.png';

const navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <div>
                    <NavLink to ="/profile" activeClassName={s.active}> <img className={s.img} src={profile} /> Профиль </NavLink>
                </div>
                <div>
                    <NavLink to ="News" activeClassName={s.active}><img className={s.img} src={news} /> Новости </NavLink>
                </div>
                <div>
                    <NavLink to="/Dialogs" activeClassName={s.active}><img className={s.img} src={message} /> Сообщения </NavLink>
                </div>
                <div>
                    <NavLink to="Music" activeClassName={s.active}><img className={s.img} src={music} /> Музыка </NavLink>
                </div>
                <div>
                    <NavLink to ="/users" activeClassName={s.active}><img className={s.img} src={usersSearch} /> Люди </NavLink>
                </div>
                <div>
                    <NavLink to ="Settings" activeClassName={s.active}><img className={s.setting} src={setting} /> Настройки </NavLink>
                </div>
            </div>
        </nav>
    )
}
export default navbar;