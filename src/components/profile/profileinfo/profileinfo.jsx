import React from 'react';
import s from './profileinfo.module.css';
import background from './../../img/background.jpg';
import Preloader from "../../common/preloader/preloader";
import user from '../../img/user.png'
import ProfileStatus from "./profileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./profileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
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
                        <img className={s.logo} src={props.profile.photos.large == null ? user : props.profile.photos.large} />
                        <div>
                        Описание:
                        </div>
                        <div>
                            {"Имя:  " + props.profile.fullName}
                        </div>
                        <div>
                            <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} />
                        </div>
                        <div>
                            {"Работа: " + (!props.profile.lookingForAJob? "Нет" : props.profile.lookingForAJobDescription)}
                        </div>
                        <div>
                            {"Обо мне: " + (!props.profile.aboutMe? "Нет" :props.profile.aboutMe)}
                        </div>
                        <div>
                            {"VK: " + (!props.profile.contacts.vk ? "Нет" : props.profile.contacts.vk)}
                        </div>
                        <div>
                            {"GitHub: " + (!props.profile.contacts.github ? "Нет" : props.profile.contacts.github)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;