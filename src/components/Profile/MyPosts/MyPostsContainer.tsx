import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, PostsType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    posts: PostsType;
    newPostText: string;
    dispatch: (action: ActionsTypes) => void;
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts
        .map( p => <Post key={p.id} message={p.message} likesCounter={p.likesCount} /> );

    let addPost = () => {
        // props.addPostCallback(props.newPostText);
        let action = addPostAC(props.newPostText);
        props.dispatch(action);
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.dispatch(action);
    }

    return (<MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     updateNewPostText={onPostChange}
                     addPost={addPost}
    />);
}

export default MyPostsContainer;