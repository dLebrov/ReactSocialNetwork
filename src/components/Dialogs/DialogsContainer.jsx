import React, {useEffect} from 'react';
import {SendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import { getAllDialogs } from './../../redux/dialogs-reducer';


const DialogsContainer = (props) => {
    useEffect( () => {
        props.setDialogs()} , []);
    return (
        <Dialogs allDialogs={props.allDialogs} sendMessage={props.sendMessage} />
    )
}

let mapStateToProps = (state) => {
    return {
        allDialogs: state.dialogsPage.dialogs,

    }
}

export default compose(connect(mapStateToProps, 
    {sendMessage:SendMessageCreator,setDialogs:getAllDialogs}),
    withAuthRedirect
)(DialogsContainer);