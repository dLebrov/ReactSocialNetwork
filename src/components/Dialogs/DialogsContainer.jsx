import React, {useEffect} from 'react';
import {SendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import { getAllDialogs, getAllMessages } from '../../redux/dialogs-reducer';
import { withRouter } from 'react-router-dom';


const DialogsContainer = (props) => {
    useEffect( () => {
        props.setDialogs()} , []);
    return (
        <Dialogs getFriendId={props.getFriendId} allDialogs={props.allDialogs} allMessages={props.allMessages} sendMessage={props.sendMessage} />
    )
}

let mapStateToProps = (state) => {
    return {
        allDialogs: state.dialogsPage.dialogs,
        allMessages: state.dialogsPage.messages
    }
}

export default compose(connect(mapStateToProps, 
    {sendMessage:SendMessageCreator,
        setDialogs:getAllDialogs,
        getAllMessages,
    }),
    withRouter,
    withAuthRedirect
)(DialogsContainer);