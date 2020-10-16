import React from "react";
import s from "./../profileinfo/profileinfo.module.css";
import {createField, Input} from "../../common/FromsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FromsControls/FormsControls.module.css";
import {Modal} from "react-bootstrap";
import styled from "styled-components";

const ProfileDataForm = (props) => {
    const handleClose = () => props.setShow(false);

    const ModalStyled = styled.div`
        background: #18191a;
        color:#fff;
        .close {
            color:#fff;
        }
    `
    
    return (
        <Modal show={props.show} onHide={handleClose} size="lg" 
        aria-labelledby="contained-modal-title-vcenter" centered 
        backdrop="static" keyboard={false}>
            <ModalStyled>
            <Modal.Header closeButton>  
                <Modal.Title id="contained-modal-title-vcenter">Информация</Modal.Title>
            </Modal.Header>
            <form onSubmit={props.handleSubmit}>
            <Modal.Body>
                <div className={s.des}>
                <div>Имя:  {createField("Имя", "fullName", [], Input)}</div>
                <div>
                    Статус: {createField ("Статус", "status", [], Input)}
                </div>
                <div className= {s.checkBox}>
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
                <button className={s.buttonModal}>Сохранить</button>  
            </Modal.Footer>
            </form>
            </ModalStyled>
        </Modal>
        
    )
};

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;