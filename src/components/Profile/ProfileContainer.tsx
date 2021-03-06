import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStoreType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type UserProfileType = {
    aboutMe: string;
    contacts: {facebook: string, website: string, vk: string, twitter: string, instagram: string, youtube: string, github: string, mainLink: string};
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: {small: string, large: string};
}

type PathParamsType = {
    userId: string;
}

type MapStatePropsType = {
    profile: UserProfileType | null;
}

type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void;
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

// export type ProfileContainerPropsType = {
//     setUserProfile: (profile: UserProfileType) => void;
//     profile: UserProfileType | null;
// }

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)
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

let mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
