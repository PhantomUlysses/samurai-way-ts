import React from 'react';
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: StoreType;
}

const DialogsContainer: React.FC<DialogsPropsType> = (props ) => {

    let state = props.store.getState();

    // let textAreaInput = React.createRef<HTMLTextAreaElement>();
    //
    // let buttonOnClickHandler = () => {
    //     let text = textAreaInput.current?.value;
    //     if (text) {
    //         let action = addPostInDialogsAC(text);
    //         props.dispatch(action);
    //     }
    //     //alert(text);
    // }

    let onSendMessageClick = () => {
        let action = sendMessageAC();
        props.store.dispatch(action);
    }

    let onNewMessageChange = (body: string) => {
        let action = updateNewMessageBodyAC(body);
        props.store.dispatch(action);
    }

    return (
        <Dialogs dialogsPage={state.dialogsPage}
                 updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick} />
);
}

export default DialogsContainer;