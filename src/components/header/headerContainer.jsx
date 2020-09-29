import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import { getAuthUserData, getMyProfileData, zeroStateThunk } from './../../redux/auth-reducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getMyProfileData(this.props.userId);
    }

    componentDidUpdate() {
        if(this.props.userId && !this.props.photos) {
            this.props.getMyProfileData(this.props.userId);
        }
        if(!this.props.userId) {
            this.props.zeroStateThunk()
        }
    }

    render() {
        return <>
        <Header {...this.props} />
        </>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    login: state.auth.login,
    photos: state.auth.myData,
});
export default connect (mapStateToProps, {logout, getAuthUserData, getMyProfileData, zeroStateThunk })(HeaderContainer);