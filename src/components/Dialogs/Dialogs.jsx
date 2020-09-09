import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import { Input } from '../common/FromsControls/FormsControls';


const Dialogs = (props) => {
    let dialogsElements = props.allDialogs.map(d => (<DialogItem getFriendId={props.getFriendId} name={d.userName} key={d.id} id={d.id} photos={d.photos.small}/>));
    let messagesElements = props.allMessages.map(m => (<Message message={m.body} key={m.id} id={m.id} viewed={m.viewed}/>));
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                        {dialogsElements}
                </div>
                {/* { <div className={s.messages}>
                        {messagesElements}
                </div> } */}
            </div>
            <div className={s.addMessage}>
            </div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
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