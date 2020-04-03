import React from 'react';
import s from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./profileinfo/profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
        <ProfileInfo profile={props.profile} status = {props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer />
    </div>
    )
}
export default Profile;