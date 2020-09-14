import React from "react";
import s from "./../profileinfo/profileinfo.module.css";
import {createField, Input} from "../../common/FromsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FromsControls/FormsControls.module.css";
import { setStatus } from './../../../redux/profile-reducer';


const ProfileDataForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.des}>
                <div>Имя:  {createField("Имя", "fullName", [], Input)}</div>
                <div>
                    Статус: {createField ("Статус", "status", [], Input)}
                </div>
                <div>
                    Работа: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
                <div>
                    Мои скиллы: {createField("о работе", "lookingForAJobDescription", [], Input)}
                </div>
                <div>
                    Обо мне: {createField("Обо мне", "aboutMe", [], Input)}
                </div>
                <div>
                    Контакты: {(Object.keys(props.profile.contacts).map(key => {
                    return <div>
                        {createField(key, "contacts." + key, [], Input)}
                    </div>
                }))}
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <button>Сохранить</button>
            </div>
        </form>
    )
};

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;