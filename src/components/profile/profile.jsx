import React from 'react';
import s from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./profileinfo/profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
        <ProfileInfo isOwner={props.isOwner}
                     profile={props.profile}
                     status = {props.status}
                     updateStatus={props.updateStatus}
                     savePhoto = {props.savePhoto}
        />
        <MyPostsContainer />
    </div>
    )
}
export default Profile;