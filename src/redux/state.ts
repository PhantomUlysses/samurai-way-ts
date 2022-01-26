const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type PostsType = Array<PostsItemType>;
type PostsItemType = {
    id: number;
    message: string;
    likesCount: number;
}

export type DialogsType = Array<DialogsItemType>;
type DialogsItemType = {
    id: number;
    name: string;
}

export type MessagesType = Array<MessageItemType>;
type MessageItemType = {
    id: number;
    message: string;
}

export type ProfilePageType = {
    posts: PostsType;
    newPostText: string;
}
type MessagesPageType = {
    dialogs: DialogsType;
    messages: MessagesType;
}
type SidebarType = {

}

export type RootStateType = {
    profilePage: ProfilePageType;
    messagesPage: MessagesPageType;
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType;
    _onChange: (state: RootStateType) => void;
    getState: () => RootStateType;
    subscribe: (callback: () => void) => void;
    // addPost: (postText: string) => void;
    // updateNewPostText: (newText: string) => void;
    dispatch: (action: ActionsTypes) => void;
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>;

const store: StoreType = {
    _state: {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Nikita'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ]
    },
    sidebar: {}

},
    _onChange(state: RootStateType) {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(callback) {
        this._onChange = callback; // observer // publisher-subscriber
    },
    //
    // addPost(postText: string) {
    //     const newPost: PostsItemType = {
    //         id: new Date().getTime(),
    //         message: postText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._onChange(this._state);
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._onChange(this._state);
    // },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostsItemType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._onChange(this._state);
        }
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const;
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const;
}

export default store;