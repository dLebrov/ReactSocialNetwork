import React, {useEffect} from 'react';
import {SendMessageCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./../Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { getAllDialogs, getAllMessages, getFriendId } from '../../../redux/dialogs-reducer';
import { withRouter, useParams } from 'react-router-dom';
import Chat from './Chat';


const ChatContainer = (props) => {
    let history = useParams();
    useEffect( () => {
        props.setDialogs()} , []);
    useEffect (()=> {
        props.getAllMessages(history.id)}, [history.id]);
        
    return (
        <Chat allDialogs={props.allDialogs} id={history.id} allMessages={props.allMessages} sendMessage={props.sendMessage} />
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
)(ChatContainer);

