import React, { useState, useEffect } from "react";
import ProfileInfo from "./profileinfo/profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  //аналог записи mapState
  const me = useSelector((state) => state.auth);
  // const mapStateToProps = (state) => {
  //   return {
  //     me: state.auth
  //   }
  // }
  //
  const userId = props.match.params.userId;
  const checker = me && me !== null && props.profile ? true : false;
  useEffect(() => {
    //установка юзера
    if (checker && me.userId !== props.profile.userId) {
      setProfile(props.profile);
      setLoading(false);
    }
    //
    //установка моего
    else if (checker && !userId && me.userId) {
      setProfile(props.profile);
      setLoading(false);
    }
    //
    return () => {
      setProfile(null);
      setLoading(false);
    };
  }, [props.profile]);
  if (loading) {
    return "";
  }
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      {/* <MyPostsContainer /> */}
    </div>
  );
};
export default Profile;