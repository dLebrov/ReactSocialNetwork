import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow, toggleIsFollowingProgress, requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from "../../redux/UsersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {

        return <>

            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose (connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers: requestUsers})) (UsersContainer)
