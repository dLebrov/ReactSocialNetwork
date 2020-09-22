import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import { getAuthUserData, getMyProfileData } from './../../redux/auth-reducer';
import { getUserProfile } from './../../redux/profile-reducer';


class HeaderContainer extends React.Component {

    constructor (props) {
        super(props);
        this.state = {userId: null}
    }

    componentDidMount() {
        if (this.state.userId === null) {
            this.setState({userId: this.props.userId});
        }
        if(this.state.userId) {
            this.props.getMyProfileData(this.state.userId);
        }
    }

    componentDidUpdate() {
        if(this.state.userId && !this.props.photos) {
            this.props.getMyProfileData(this.state.userId);
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
export default connect (mapStateToProps, {logout, getAuthUserData, getMyProfileData})(HeaderContainer);