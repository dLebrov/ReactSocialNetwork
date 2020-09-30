import React, { useEffect } from "react";
import "./users.css";
import userPhoto from "../img/user.png";
import { NavLink } from "react-router-dom";
import Preloader from "../common/preloader/preloader";
import { Paginator } from "./paginator";
import scroll from "./../img/scroll.png";

const Users = (props) => {
  let listener = function () {
    var stop = document.body.scrollTop || document.documentElement.scrollTop;
    if (stop > 800) {
      document.getElementById("scrollToTop").style.opacity = "1";
    } else {
      document.getElementById("scrollToTop").style.opacity = "0";
    }
    document.getElementById("scrollToTop").onclick = function () {
      document.getElementById("start").scrollIntoView({
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

  const BtnComponent = ({ remove, add, u }) => {
    return (
      <div
        disabled={props.followingInProgress.some((id) => id === u.id)}
        className={"unFollowButton"}
        onClick={() => {
          remove ? props.unFollow(u.id) : props.follow(u.id);
        }}
      >
        {remove ? "Удалить" : "+"}
      </div>
    );
  };
  const ButtonRender = (u) => {
    return (
      <div className="wrapBtn">
        {u.followed ? (
          <BtnComponent remove={true} add={false} u={u} />
        ) : (
          <BtnComponent remove={false} add={true} u={u} />
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
