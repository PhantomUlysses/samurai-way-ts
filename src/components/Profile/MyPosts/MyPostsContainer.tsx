import React from 'react';
import Post from './Post/Post';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

// type MyPostsPropsType = {
//     store: StoreType;
// }

const MyPostsContainer = () => {
    // let state = props.store.getState();

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();
                    let postsElements = state.profilePage.posts
                        .map(p => <Post key={p.id} message={p.message} likesCounter={p.likesCount}/>);

                    let addPost = () => {
                        // props.addPostCallback(props.newPostText);
                        let action = addPostAC(state.profilePage.newPostText);
                        store.dispatch(action);
                    }

                    let onPostChange = (text: string) => {
                        let action = updateNewPostTextAC(text)
                        store.dispatch(action);
                    }
                    return <MyPosts posts={store.getState().profilePage.posts}
                                    newPostText={state.profilePage.newPostText}
                                    updateNewPostText={onPostChange}
                                    addPost={addPost}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;