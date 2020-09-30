import React, {useState} from 'react';
import s from './profileinfo.module.css';
import Preloader from "../../common/preloader/preloader";
import user from '../../img/user.png'
import ProfileStatusWithHooks from "./profileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    //let [editMode, setEditMode] = useState(false);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const onSubmit = (formData) => {
        props.updateStatus(formData.status);
        props.saveProfile(formData).then (() => {
            setShow(false);
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

    let allData = { 
        aboutMe: props.profile.aboutMe, 
        status: props.status,
        contacts: props.profile.contacts,
        fullName: props.profile.fullName,
        lookingForAJob: props.profile.lookingForAJob,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
        userId: props.profile.userId
    };

    return (
        <div>
            <div className={s.allProfile}>
                <div className={s.all}>
                    <div>
                        <div className={s.description}>
                            <img onClick={pro1} className={s.logo} id="image"
                                src={props.profile.photos.large == null ? user : props.profile.photos.large}/>
                            <input className={s.input} type="file" id="file" onChange={onMainPhotoSelected}/>

                            {show ? <ProfileDataForm show={show} setShow={setShow} initialValues={allData} profile={props.profile}
                                                        onSubmit = {onSubmit}/>
                            : <ProfileData status={props.status}
                                            updateStatus={props.updateStatus}
                                            profile={props.profile}
                                            isOwner={props.isOwner}
                                            handleShow={handleShow}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <ul className={s.des}>
            <li>
                { "Имя: " + props.profile.fullName}
            </li>
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
            {props.isOwner && <button className={s.button} onClick={props.handleShow}>Редактировать</button>}
        </ul>
    )
};

const Contact =(props) => {
    return <div className={s.contacts}>{props.contactTitle}: <a href = {props.contactValue} target="blank">{props.contactValue}</a></div>
}

export default ProfileInfo;