import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

// type DialogsPropsType = {
//     dialogsPage: DialogsPageType;
//     updateNewMessageBody: (body: string) => void;
//     sendMessage: () => void;
// }

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map( d => <DialogItem id={d.id} key={d.id} name={d.name} /> );
    let messageElements = props.dialogsPage.messages
        .map( m => <Message key={m.id} message={m.message} /> );
    let newMessageBody = props.dialogsPage.newMessageBody;

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
        props.sendMessage();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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