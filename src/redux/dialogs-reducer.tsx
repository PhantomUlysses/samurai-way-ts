import {ActionsTypes, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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

