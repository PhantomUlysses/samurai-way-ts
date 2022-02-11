import {ActionsTypes, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initaialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'Vitalik'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: DialogsPageType = initaialState, action: ActionsTypes) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyAC = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
} as const);

export const sendMessageAC = () => ({
    type: SEND_MESSAGE
} as const);

export default dialogsReducer;

