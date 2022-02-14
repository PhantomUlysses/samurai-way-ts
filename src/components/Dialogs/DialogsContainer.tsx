import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

// type DialogsPropsType = {
//     store: StoreType;
// }

const DialogsContainer = () => {

    // let state = props.store.getState();

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

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();
                    let onSendMessageClick = () => {
                        let action = sendMessageAC();
                        store.dispatch(action);
                    }

                    let onNewMessageChange = (body: string) => {
                        let action = updateNewMessageBodyAC(body);
                        store.dispatch(action);
                    }
                    return (
                        <Dialogs dialogsPage={state.dialogsPage}
                                 updateNewMessageBody={onNewMessageChange}
                                 sendMessage={onSendMessageClick}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;