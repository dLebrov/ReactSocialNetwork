import React, {useState} from "react";
import s from "./../profileinfo/profileinfo.module.css";
import {createField, Input} from "../../common/FromsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FromsControls/FormsControls.module.css";
import { setStatus } from './../../../redux/profile-reducer';
import { Col, Container, Modal, Row } from "react-bootstrap";

const ProfileDataForm = (props) => {
    const handleClose = () => props.setShow(false);
    
    return (
        <Modal show={props.show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>  
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <form onSubmit={props.handleSubmit}>
            <Modal.Body>
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
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button>Сохранить</button>  
            </Modal.Footer>
            </form>
        </Modal>
        
    )
};

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;