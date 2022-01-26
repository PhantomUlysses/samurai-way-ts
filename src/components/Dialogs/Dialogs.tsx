import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesType, DialogsType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType;
    messages: MessagesType;
}

const Dialogs: React.FC<DialogsPropsType> = (props ) => {

    let dialogsElements = props.dialogs
        .map( d => <DialogItem id={d.id} name={d.name} /> );


    let messageElements = props.messages
        .map( m => <Message message={m.message} /> );

    let textAreaInput = React.createRef<HTMLTextAreaElement>();

    let buttonOnClickHandler = () => {
        let text = textAreaInput.current?.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={ textAreaInput }></textarea>
            </div>
            <div>
                <button onClick={ buttonOnClickHandler }>Add</button>
            </div>
        </div>
);
}

export default Dialogs;