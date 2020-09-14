import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import { getUserProfile } from './../../redux/profile-reducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.isAuth);
    }

    render() {
        return <>
        <Header {...this.props} />
        </>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photos: state.profilePage.profile,
});
export default connect (mapStateToProps, {logout, getUserProfile})(HeaderContainer);