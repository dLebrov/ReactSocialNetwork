import React, {useEffect} from 'react';
import {SendMessageCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./../Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { getAllDialogs, getAllMessages, sendMessageThunk } from '../../../redux/dialogs-reducer';
import { withRouter, useParams } from 'react-router-dom';
import Chat from './Chat';
import { getUserProfile } from '../../../redux/profile-reducer';


const ChatContainer = (props) => {
    let history = useParams();
    useEffect (()=> {
        props.getUserProfile(history.id)}, [history.id]);
    useEffect (()=> {
        props.getAllMessages(history.id)}, [history.id]);
        
    return (
        <Chat allDialogs={props.allDialogs} id={history.id} allMessages={props.allMessages} sendMessageThunk={props.sendMessageThunk} userData={props.userData} />
    )
}

let mapStateToProps = (state) => {
    return {
        allDialogs: state.dialogsPage.dialogs,
        allMessages: state.dialogsPage.messages,
        userData: state.profilePage.profile

    }
}

export default compose(connect(mapStateToProps, 
    {setDialogs:getAllDialogs,
        getUserProfile,
        getAllMessages,
        sendMessageThunk
    }),
    withRouter,
    withAuthRedirect
)(ChatContainer);

