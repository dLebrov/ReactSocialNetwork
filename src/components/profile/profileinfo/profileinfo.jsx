import React from 'react';
import s from './profileinfo.module.css';
import Preloader from "../../common/preloader/preloader";
import user from '../../img/user.png'
import ProfileStatusWithHooks from "./profileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    function pro1(){
        document.getElementById("file").click();
    }
    if (!props.profile) {
        return <Preloader/>
    }
    //<img   src="https://wallbox.ru/resize/1024x1024/wallpapers/main/201333/devushka-krylya-sinij-52f2c8e.jpg" /> - профиль
    return (
        <div>
            {/*<div>
                <img className={s.img} src={background} />
            </div>*/}
            <div className={s.all}>
                <div>
                    <div className={s.description}>
                            <img onClick={pro1} className={s.logo} id="image"
                                 src={props.profile.photos.large == null ? user : props.profile.photos.large}/>
                            <input className={s.input} type = "file" id = "file" onChange={onMainPhotoSelected} />
                        <ul className={s.des}>
                            <li>{"Имя:  " + props.profile.fullName}</li>
                            <li>
                                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                            </li>
                            <li>
                                {"Работа: " + (!props.profile.lookingForAJob ? "Нет" : props.profile.lookingForAJobDescription)}
                            </li>
                            <li>
                                {"Обо мне: " + (!props.profile.aboutMe ? "Нет" : props.profile.aboutMe)}
                            </li>
                            <li>
                                {"VK: " + (!props.profile.contacts.vk ? "Нет" : props.profile.contacts.vk)}
                            </li>
                            <li>
                                {"GitHub: " + (!props.profile.contacts.github ? "Нет" : props.profile.contacts.github)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;