import React, {useEffect, useState} from 'react';
import s from './profileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    useEffect( () => {
        setStatus(props.status)} , [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus (status)
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

export default ProfileStatusWithHooks;