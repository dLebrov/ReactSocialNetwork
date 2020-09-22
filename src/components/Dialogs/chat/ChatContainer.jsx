import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { getAllDialogs, getAllMessages, sendMessageThunk } from '../../../redux/dialogs-reducer';
import { withRouter} from 'react-router-dom';
import Chat from './Chat';
import { getUserProfile } from '../../../redux/profile-reducer';


class ChatContainer extends React.Component {

    constructor (props) {
        super(props);
        this.state = {userId: null}
    }

    componentDidMount() {
        this.setState({userId: this.props.match.params.id});
        this.props.getUserProfile(this.props.match.params.id);
        this.props.getAllMessages(this.props.match.params.id);
    }

    interval () {
        this.timer = setInterval (() => {
            this.props.getAllMessages(this.state.userId);
        }, 3000)
    }
    deleteInterval () {
        return clearInterval(this.timer);
    }
    
    componentDidUpdate(prevProps) {
        this.deleteInterval()
        if (this.props.match.params.id !== this.state.userId) {
            this.setState({userId: this.props.match.params.id});
            this.props.getAllMessages(this.state.userId);
            this.deleteInterval();
        } else if (this.props.match.params.id === this.state.userId) {
            this.interval();
        }
    }

    componentWillUnmount() {
        this.deleteInterval();
        this.state.userId = null;
    }

    render () {    
    return (
        <Chat allDialogs={this.props.allDialogs} id={this.props.match.params.id} allMessages={this.props.allMessages} sendMessageThunk={this.props.sendMessageThunk} userData={this.props.userData} />
    )
    }
}

let mapStateToProps = (state) => {
    return {
        allDialogs: state.dialogsPage.dialogs,
        allMessages: state.dialogsPage.messages,
        userData: state.profilePage.profile,
        totalCount: state.dialogsPage.totalCount

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

