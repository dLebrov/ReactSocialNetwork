import React, {useEffect, useState} from 'react';
import s from './profileStatus.module.css';
import Preloader from "../../../common/preloader/preloader";
import user from '../../../img/user.png'

const ProfileData = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [fullName, setFullName] = useState(props.profile.fullName);


    useEffect( () => {
        setFullName(props.profile.fullName)} , [props.profile.fullName]);

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus (fullName)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    };

    const deactivateEditModeEnter = (enter) => {
        if (enter.charCode === 13){
            setEditMode(false);
            props.updateStatus (status)
        }
    };

    /*componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }*/

    return (
        <div>

            { !editMode &&
            <div>
                <span className={s.span} onClick={activateEditMode} >{"Статус: " + props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                Статус:
                <input className={s.input} onChange={onStatusChange} autoFocus={true} onKeyPress={deactivateEditModeEnter} value={status}/>
                <button className={s.button} onClick={deactivateEditMode} >Сохранить</button>
            </div>
            }
        </div>
    )
}

/*<li>{"Имя:  " + props.profile.fullName}</li>
<li>{"Работа: " + (!props.profile.lookingForAJob ? "Нет" : props.profile.lookingForAJobDescription)}</li>
<li>{"Обо мне: " + (!props.profile.aboutMe ? "Нет" : props.profile.aboutMe)}</li>
<li>{"VK: " + (!props.profile.contacts.vk ? "Нет" : props.profile.contacts.vk)}</li>
<li>{"GitHub: " + (!props.profile.contacts.github ? "Нет" : props.profile.contacts.github)}</li>*/

export default ProfileStatusWithHooks;