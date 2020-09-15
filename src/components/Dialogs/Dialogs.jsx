import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogsElements = props.allDialogs.map(d => (
    <DialogItem name={d.userName} key={d.id} id={d.id} photos={d.photos.small}/>));
    return (<>
        <h1>Layout Is Not Ready</h1>
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                        {dialogsElements}
                </div>
            </div>
            <div className={s.addMessage}>
            </div>
        </div>
        </>
    )
}

export default Dialogs;