import React, {useState} from 'react';
import s from './profileinfo.module.css';
import Preloader from "../../common/preloader/preloader";
import user from '../../img/user.png'
import ProfileStatusWithHooks from "./profileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        props.saveProfile(formData).then (() => {
            setEditMode(false);
        })

    };

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    function pro1() {
            props.isOwner && document.getElementById("file").click();
    }

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.all}>
                <div>
                    <div className={s.description}>
                        <img onClick={pro1} className={s.logo} id="image"
                             src={props.profile.photos.large == null ? user : props.profile.photos.large}/>
                        <input className={s.input} type="file" id="file" onChange={onMainPhotoSelected}/>

                        {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile}
                                                     onSubmit = {onSubmit}/>
                        : <ProfileData status={props.status}
                                          updateStatus={props.updateStatus}
                                          profile={props.profile}
                                          isOwner={props.isOwner}
                                          goToEditMode={() => {
                                              setEditMode(true)
                                          }}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <ul className={s.des}>
            <li>{"Имя:  " + props.profile.fullName}</li>
            <li>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </li>
            <li>
                {"Работа: " + (!props.profile.lookingForAJob ? "Нет" : props.profile.lookingForAJob)}
            </li>
            <li>
                {"Мои скиллы: " + (!props.profile.lookingForAJobDescription ? "Нет" : props.profile.lookingForAJobDescription)}
            </li>
            <li>
                {"Обо мне: " + (!props.profile.aboutMe ? "Нет" : props.profile.aboutMe)}
            </li>
            <li>
                {(Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                }))}
            </li>
            {props.isOwner && <button onClick={props.goToEditMode}>Изменить</button>}
        </ul>
    )
};

const Contact =(props) => {
    return <div>{props.contactTitle}: {props.contactValue}</div>
}

export default ProfileInfo;