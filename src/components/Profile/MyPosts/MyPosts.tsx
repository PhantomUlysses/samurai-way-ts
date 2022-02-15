import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: PostsType;
    newPostText: string;
    updateNewPostText: (e: string) => void;
    addPost: (newPostText: string) => void;
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts
        .map( p => <Post key={p.id} message={p.message} likesCounter={p.likesCount} /> );

    let onAddPost = () => {
        props.addPost(props.newPostText);
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
        // let action = updateNewPostTextAC(e.currentTarget.value)
        // props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;