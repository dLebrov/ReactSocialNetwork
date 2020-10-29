import React from 'react';
import {connect} from "react-redux";
import { withRouter} from 'react-router-dom';
import {
    follow,
    setCurrentPage,
    unFollow, 
    toggleIsFollowingProgress, 
    requestUsers,
    UsersType
} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {getCurrentPage,getFollowingInProgress,getIsFetching,getPageSize,getTotalUserCount, getUsers} from "../../redux/UsersSelectors";
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    currentPage: number,
    pageSize: number,
    pageNumber: number,
    totalUserCount: number,
    users: UsersType,
    followingInProgress: number[],
    match: {
        isExact: boolean,
        params: {
            id?: number
        },
        path: string,
        url: string
    }

    getUsers: (currentPage: number, pageSize: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    unFollow: () => void,
    follow: () => void,

}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
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
                   id = {this.props.match.params.id}
                   
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
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
    getUsers: requestUsers,
}
    ),
    withRouter
    ) (UsersContainer)
