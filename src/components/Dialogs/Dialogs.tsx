import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    MessagesType,
    DialogsType,
    ActionsTypes
} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogs: DialogsType;
    messages: MessagesType;
    dispatch: (action: ActionsTypes) => void;
    newMessageBody: string;
}

const Dialogs: React.FC<DialogsPropsType> = (props ) => {

    let dialogsElements = props.dialogs
        .map( d => <DialogItem id={d.id} name={d.name} /> );
    let messageElements = props.messages
        .map( m => <Message message={m.message} /> );
    let newMessageBody = props.newMessageBody;

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
        props.dispatch(action);
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        let action = updateNewMessageBodyAC(body);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={ onNewMessageChange }
                              placeholder={'Enter your message'}
                              ></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Send</button>
                </div>
            </div>

        </div>
);
}

export default Dialogs;