import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStoreType} from "../../redux/redux-store";

export type UserProfileType = {
    aboutMe: string;
    contacts: {facebook: string, website: string, vk: string, twitter: string, instagram: string, youtube: string, github: string, mainLink: string};
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: {small: string, large: string};
}

type ProfileContainerPropsType = {
    setUserProfile: (profile: UserProfileType) => void;
    profile: null | UserProfileType;
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state: AppStoreType) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
