import {UserProfileType} from "../components/Profile/ProfileContainer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type PostsItemType = {
    id: number;
    message: string;
    likesCount: number;
}

type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof setUserProfile>
                   | ReturnType<typeof updateNewPostTextAC>;

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ] as Array<PostsItemType>,
        newPostText: '',
        profile: null,
    };

type InitialStateType = {
    posts: Array<PostsItemType>;
    newPostText: string;
    profile: null | UserProfileType;
};

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsItemType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => ({
    type: ADD_POST,
    postText: postText,
} as const);

export const setUserProfile = (profile: UserProfileType) => ({
    type: SET_USER_PROFILE,
    profile,
} as const);

export const updateNewPostTextAC = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
} as const);

export default profileReducer;

