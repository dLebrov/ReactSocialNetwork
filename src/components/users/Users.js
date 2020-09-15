import React from 'react';
import style from './users.module.css';
import userPhoto from '../img/user.png';
import {NavLink} from "react-router-dom";
import Preloader from "../common/preloader/preloader";
import {Paginator} from "./paginator";

const Users = (props) => {
    if (!props.users) {
        return <Preloader />
    }

    return (
    <div>
        <h1>Layout Is Not Ready</h1>
        <Paginator pageSize={props.pageSize}
                   totalItemsCount={props.totalUserCount}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   portionSize={10} />
        {
            props.users.map(u => <div className={style.text} key={u.id}>
                <span>
                    <div>
                        <NavLink to = {'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo}/>
                        </NavLink>
                    </div>
                    <div className={style.test}>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some( id => id === u.id)} className={style.unFollowButton}
                                      onClick={() => { props.unFollow(u.id) }}> Удалить </button>
                            : <button disabled={props.followingInProgress.some( id => id === u.id)} className={style.followButton}
                                      onClick={() => {props.follow(u.id)}}> + </button>}
                        
                            <button>
                                <NavLink to={'/dialogs/'+ u.id}>
                                    написать
                                </NavLink>
                            </button>
                    </div>
                </span>
                <div className={style.data}>
                    <span>
                        <div>{u.name}</div>
                        <div>{"Статус: " + (!u.status? "Нет" : u.status)}</div>
                    </span>
                </div>

            </div>)
        }
    </div>)
}



export default Users;