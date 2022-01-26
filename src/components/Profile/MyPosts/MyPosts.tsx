import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType;
    newPostText: string;
    dispatch: (action: ActionsTypes) => void;
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts
        .map( p => <Post key={p.id} message={p.message} likesCounter={p.likesCount} /> );

    let addPost = () => {
        // props.addPostCallback(props.newPostText);
        let action = addPostAC(props.newPostText);
        props.dispatch(action);
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value);
        let action = updateNewPostTextAC(e.currentTarget.value)
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;