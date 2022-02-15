import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type PostsType = Array<PostsItemType>;
export type PostsItemType = {
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
export type DialogsPageType = {
    dialogs: DialogsType;
    messages: MessagesType;
    newMessageBody: string;
}
export type SidebarType = {

}

export type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SidebarType
}

export type StoreType = {
    // _state: RootStateType;
    // _onChange: (state: RootStateType) => void;
    getState: () => RootStateType;
    subscribe: (callback: () => void) => void;
    // addPost: (postText: string) => void;
    // updateNewPostText: (newText: string) => void;
    dispatch: (action: ActionsTypes) => void;
}

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>;

// const store: StoreType = {
//     _state: {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 12},
//             {id: 2, message: 'It\'s my first post', likesCount: 11},
//             {id: 3, message: 'Blabla', likesCount: 11},
//             {id: 4, message: 'Dada', likesCount: 11}
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrew'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Nikita'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'},
//             {id: 7, name: 'Vitalik'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Yo'},
//             {id: 5, message: 'Yo'},
//             {id: 6, message: 'Yo'}
//         ],
//         newMessageBody: ''
//     },
//     sidebar: {}
//
// },
//     _onChange(state: RootStateType) {
//         console.log('State changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(callback) {
//         this._onChange = callback; // observer // publisher-subscriber pattern
//     },
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._onChange(this._state);
//     }
// }
//
//
//
//
//
// export default store;