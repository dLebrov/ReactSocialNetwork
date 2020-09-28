import React from 'react';
import s from "./../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import { Input } from '../../common/FromsControls/FormsControls';
import Message from './../Message/Message';
import ChatItems from './chatItems/ChatItems';


const Dialogs = (props) => {
    let messagesElements = props.allMessages.map(m => <Message message={m.body} senderName={m.senderName} />)
    let addNewMessage = (values) => {
        props.sendMessageThunk(props.id, values.newMessageBody);
    }
    return (<div> 
            <div className={s.dialogChat}>
                {props.userData ?
                    <ChatItems name={props.userData.fullName}
                    key={props.userData.userId} id={props.userData.userId}
                    photos={props.userData.photos.small} /> : false}
            </div>
            <div className={s.chatBlock}>
                <div className={s.chat}>
                    <div className={s.messagesBody}>
                        {messagesElements}
                    </div>
                </div>
            </div>
            <div className={s.messageBlock}>
                <div className={s.addMessage}>
                    <DialogsReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.formMessage}>
            <div className={s.sendMessage}>
                <Field component={Input}
                       placeholder={"напишите сообщение"}
                       onSubmit={props.handleSubmit}
                       name={"newMessageBody"}
                       />
            </div>
            <div>
                <button className={s.button} onClick={props.handleSubmit}>Отправить</button>
            </div>
        </div>

    </form>
}

const DialogsReduxForm = reduxForm({form: "dialogForm"})(DialogsForm)

export default Dialogs;