import React from 'react';
import s from "./../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { Input } from '../../common/FromsControls/FormsControls';
import Message from './../Message/Message';
import ChatItems from './chatItems/ChatItems';
import { useState } from 'react';
import { useEffect } from 'react';


const Dialogs = (props) => {
    let messagesElements = props.allMessages.map(m => <Message message={m.body} senderName={m.senderName} />)
    let addNewMessage = (values) => {
        props.sendMessageThunk(props.id, values.newMessageBody);
    }
    return (<div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                {props.userData ?
                    <ChatItems name={props.userData.fullName}
                    key={props.userData.userId} id={props.userData.userId}
                    photos={props.userData.photos.small} /> : false}
                </div>
            </div>
            <div>
                {messagesElements}
            </div>
            <div className={s.addMessage}>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


let maxLength = maxLengthCreator(50);

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.formMessage}>
            <div className={s.input}>
                <Field component={Input}
                       onSubmit={props.handleSubmit}
                       name={"newMessageBody"}
                       validate={[required, maxLength]}/>
            </div>
            <div className={s.button}>
                <button onClick={props.handleSubmit}>Отправить</button>
            </div>
        </div>

    </form>
}

const DialogsReduxForm = reduxForm({form: "dialogForm"})(DialogsForm)

export default Dialogs;