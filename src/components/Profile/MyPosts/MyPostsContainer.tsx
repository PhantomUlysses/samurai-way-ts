import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {ActionsTypes, PostsType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType;
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    let state = props.store.getState();

    let postsElements = state.profilePage.posts
        .map( p => <Post key={p.id} message={p.message} likesCounter={p.likesCount} /> );

    let addPost = () => {
        // props.addPostCallback(props.newPostText);
        let action = addPostAC(state.profilePage.newPostText);
        props.store.dispatch(action);
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action);
    }

    return (<MyPosts posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
                     updateNewPostText={onPostChange}
                     addPost={addPost}
    />);
}

export default MyPostsContainer;