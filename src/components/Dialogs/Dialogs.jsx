import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Preloader from '../common/preloader/preloader';


const Dialogs = (props) => {
    let dialogsElements = props.allDialogs.map(d => (
    <DialogItem name={d.userName} key={d.id} id={d.id} photos={d.photos.small}/>));
    if (!props.allDialogs) {
        return <Preloader/>
    }
    return (<div className={s.allWiew}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialogsElemnts}>
                        {dialogsElements}
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Dialogs;