import React, { useState } from "react";
import s from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import profile from "./../img/profile.png";
import news from "./../img/news.png";
import message from "./../img/message.png";
import music from "./../img/music.png";
import setting from "./../img/setting.png";
import usersSearch from "../img/userssearch.png";
import Media from "react-media";

const Navbar = (props) => {
  const [openMenu, toggleMenu] = useState(false);

  const Links = () => {
    return (
      <div className={s.item}>
        <div className={s.itemHover}>
          <NavLink to="/profile" activeClassName={s.active}>
            {" "}
            {/*<img className={s.img} src={profile} /> */} Профиль{" "}
          </NavLink>
        </div>
        <div className={s.itemHover}>
          <NavLink to="News" activeClassName={s.active}>
            {" "}
            {/*<img className={s.img} src={news} />*/} Новости{" "}
          </NavLink>
        </div>
        <div className={s.itemHover}>
          <NavLink to="/Dialogs" activeClassName={s.active}>
            {/*<img className={s.img} src={message} />*/} Сообщения{" "}
          </NavLink>
        </div>
        <div className={s.itemHover}>
          <NavLink to="Music" activeClassName={s.active}>
            {/*<img className={s.img} src={music} /> */}Музыка{" "}
          </NavLink>
        </div>
        <div className={s.itemHover}>
          <NavLink to="/users" activeClassName={s.active}>
            {/*<img className={s.img} src={usersSearch} /> */}Люди{" "}
          </NavLink>
        </div>
        <div className={s.itemHover}>
          <NavLink to="Settings" activeClassName={s.active}>
            {/*<img className={s.setting} src={setting} />*/} Настройки{" "}
          </NavLink>
        </div>
      </div>
    );
  };

  const show = props.isHeader ? true : false;
  return (
    <>
      <Media query="(min-width: 700px)">
        <nav className={s.nav}>
          <Links />
        </nav>
      </Media>
      {show && (
        <Media query="(max-width: 700px)">
          <>
            <div className={s.navbarMobile}>
              <div
                className={s.hamburg}
                onClick={() => {
                  toggleMenu(!openMenu);
                }}
              >
                {openMenu ? (
                  <div className={s.close}>x</div>
                ) : (
                  <>
                    <span></span>
                    <span></span>
                    <span></span>
                  </>
                )}
              </div>
            </div>
            {openMenu && (
              <div className={s.menuMobileOpen}>
                <Links />
              </div>
            )}
          </>
        </Media>
      )}
    </>
  );
};
export default Navbar;
