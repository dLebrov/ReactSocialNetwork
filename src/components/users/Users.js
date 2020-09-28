import React from 'react';
import './users.css';
import userPhoto from '../img/user.png';
import {NavLink, useHistory} from "react-router-dom";
import Preloader from "../common/preloader/preloader";
import {Paginator} from "./paginator";
import scroll from "./../img/scroll.svg";


const Users = (props) => {
    const history = useHistory();
    if (!props.users) {
        return <Preloader />
    }
    if (history.location.pathname === "/users") {
        window.addEventListener('scroll', function() {
            var stop = (document.body.scrollTop || document.documentElement.scrollTop);
            if (stop > 800) {
                document.getElementById("scrollToTop").style.opacity = "1";
            } else {
                document.getElementById("scrollToTop").style.opacity = "0";
            }
            document.getElementById("scrollToTop").onclick = function() {
                window.scrollTo(0,0);
            };
        });
    }
    

    return (
    <div className={"friends"}>
        <div>
            <div className= {"paginator"}>
            <Paginator pageSize={props.pageSize}
                    totalItemsCount={props.totalUserCount}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                    portionSize={10} />
            </div>
            {
                props.users.map(u => <div className={"text"} key={u.id}>
                    <div>
                        <div className={"top"}>
                            <div>
                                <NavLink to = {'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={"photo"}/>
                                </NavLink>
                            </div>
                            <div className={"data"}>
                                <span>
                                    <div>{u.name}</div>
                                </span>
                            </div>
                        </div>
                        <div className={"bottom"}>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some( id => id === u.id)} className={"unFollowButton"}
                                        onClick={() => { props.unFollow(u.id) }}> Удалить </button>
                                : <button disabled={props.followingInProgress.some( id => id === u.id)} className={"followButton"}
                                        onClick={() => {props.follow(u.id)}}> + </button>}
                            <div className={"positionButtonMessage"}>
                                <NavLink to={'/dialogs/'+ u.id} style={{ textDecoration: 'none' }}>
                                    <span className={"buttonMessage"}>
                                            написать
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <div id="scrollToTop" ><img src={scroll} alt="" /></div>
        </div>
    </div>)
}



export default Users;