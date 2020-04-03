import React from 'react';
import Profile from "./profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            // check this section code and refactor
            userId = this.props.AuthUserId
        }
        this.props.getUserProfile(userId);
        this.props.getStatus (userId);
    }


    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status = {this.props.status}
                     updateStatus ={this.props.updateStatus} />
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter, withAuthRedirect
) (ProfileContainer)



