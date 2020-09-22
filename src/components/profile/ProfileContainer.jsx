import React from 'react';
import Profile from "./profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import Preloader from '../common/preloader/preloader';


class ProfileContainer extends React.Component {

    refreshProfile () {
        this.userId = this.props.match.params.userId;
        if (!this.userId) {
            // check this section code and refactor
            this.userId = this.props.AuthUserId;
        }
        this.props.getUserProfile(this.userId);
        this.props.getStatus (this.userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
        this.refreshProfile();
        }
    }

    render() {
        if (!this.userId) {
            return <Preloader />
        }
        return (
            <Profile {...this.props}
                     isOwner = {!this.props.match.params.userId}
                     profile={this.props.profile}
                     status = {this.props.status}
                     updateStatus ={this.props.updateStatus}
                     savePhoto = {this.props.savePhoto}
                     
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    AuthUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter, withAuthRedirect
) (ProfileContainer)
