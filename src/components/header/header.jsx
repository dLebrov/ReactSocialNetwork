import React from "react";
import s from "./header.module.css";
import myLogo from "./../img/myLogo.png";
import { NavLink } from "react-router-dom";
import exit from "../img/exit.png";
import user from "../img/user.png";
import Navbar from "./../navbar/navbar";
import { Col, Row } from "react-bootstrap";
import Media from "react-media";

const Header = (props) => {
  return (
    <header className={s.header}>
      <Row>
        <Col xl={1} lg={1} md={1} sm={1} xs={1}>
          <Media query="(max-width: 991px)">
            <Navbar isHeader={true} />
          </Media>
        </Col>
        <Col xl={3} lg={3} md={3} sm={3} xs={3}>
          <NavLink to="/profile">
            <img className={s.logo} src={myLogo} alt="" />
          </NavLink>
        </Col>
        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
          <div className={s.loginBlock}>
            {props.isAuth ? (
              <div className={s.isAuth}>
                {props.photos !== null ? (
                  props.photos.small !== null ? (
                    <img
                      className={s.photoUser}
                      src={props.photos.small}
                      alt=""
                    />
                  ) : (
                    <img className={s.photoUser} src={user} alt="" />
                  )
                ) : null}
                <div className={s.name}>{props.login}</div>
                <div className={s.button} onClick={props.logout}>
                  <img src={exit} alt="" />
                  <span type="text/css">Выйти</span>
                </div>
              </div>
            ) : (
              <NavLink to={"/login"}>
                <button className={s.logout}>Авторизоваться</button>
              </NavLink>
            )}
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
