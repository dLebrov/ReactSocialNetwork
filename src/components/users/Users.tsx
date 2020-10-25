import React, { useEffect } from 'react';
import "./users.css";
import userPhoto from "../img/user.png";
import { NavLink } from "react-router-dom";
import Preloader from "../common/preloader/preloader";
import { Paginator } from "./paginator";
import scroll from "./../img/scroll.png";
import { UsersType } from "../../redux/users-reducer";

type Props = {
  currentPage: number,
  follow: (id: number | null) => void,
  unFollow: (id: number | null) => void,
  followingInProgress: Array<number>,
  id: undefined | number,
  onPageChanged: (pageNumber: number) => void,
  pageSize: number,
  totalUserCount: number,
  users: UsersType
}

const Users: React.FC<Props> = (props:Props) => {
  let listener: ()=> void = function () {
    var stop = document.body.scrollTop || document.documentElement.scrollTop;
    if (stop > 800) {
      (document.getElementById("scrollToTop") as HTMLFormElement).style.opacity = "1";
    } else {
      (document.getElementById("scrollToTop") as HTMLFormElement).style.opacity = "0";
    }
    (document.getElementById("scrollToTop") as HTMLFormElement).onclick = function () {
      (document.getElementById("start") as HTMLFormElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  if (!props.users) {
    return <Preloader />;
  }

  type Utype = {
    followed: boolean,
    id: null | number,
    name: null | string,
    photos: {
      small: null | string,
      large: null | string,
    },
    status: null | string,
    uniqueUrlName: null | string
  }

  type PropsBtnComponent = {
    remove: boolean,
    u: Utype,
    add: any,
    btnClass: undefined | string
  }

  const BtnComponent: React.FC<PropsBtnComponent> = ({ remove, add, u , btnClass}: PropsBtnComponent) => {
    return (
      <button
        disabled ={props.followingInProgress.some((id) => id === u.id)}
        className={btnClass}
        onClick={() => {
          remove ? props.unFollow(u.id) : props.follow(u.id);
        }}
      >
        {remove ? "Удалить" : "+"}
      </button>
    );
  };
  const ButtonRender: React.FC<Utype> = (u: Utype) => {
    return (
      <div className="wrapBtn">
        {u.followed ? (
          <BtnComponent remove={true} btnClass={"unFollowButton"} add={false} u={u} />
        ) : (
          <BtnComponent remove={false} btnClass={"followButton"} add={true} u={u} />
        )}
      </div>
    );
  };
  return (
    <div className={"friends"}>
      <div>
        <div className={"paginator"} id="start">
          <Paginator
            pageSize={props.pageSize}
            totalItemsCount={props.totalUserCount}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            portionSize={10}
          />
        </div>
        {props.users.map((u) => (
          <div className={"text"} key={u.id}>
            <div>
              <div className={"top"}>
                <div>
                  <NavLink to={"/profile/" + u.id}>
                    <img
                      src={u.photos.small != null ? u.photos.small : userPhoto}
                      className={"photo"}
                    />
                  </NavLink>
                </div>
                <div className={"data"}>
                  <span>
                    <div>{u.name}</div>
                  </span>
                </div>
              </div>
              <div className={"bottom"}>
                <ButtonRender {...u} />
                <div className={"positionButtonMessage"}>
                  <NavLink
                    to={"/dialogs/" + u.id}
                    style={{ textDecoration: "none" }}
                  >
                    <span className={"buttonMessage"}>написать</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div id="scrollToTop">
          <img src={scroll} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Users;
