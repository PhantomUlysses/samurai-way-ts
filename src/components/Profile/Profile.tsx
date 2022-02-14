import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// type ProfilePropsType = {
//     profilePage: ProfilePageType;
//     store: StoreType;
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;