import React from 'react';
import {Dispatch} from 'redux';
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStoreType} from "../../../redux/redux-store";


type MapStateToPropsType = {
    posts: Array<PostType>;
    newPostText: string;
}


type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void;
    addPost: (newPostText: string) => void;
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text));
        },
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        }
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;