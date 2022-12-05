import React from 'react';
import css from './chatbox.module.css'

function Chatbox({user}) {
    return (
        <div className={css.chatBox}>
            <img className={css.profilePicture} src={user.image.png}/>
            <textarea className={css.textArea} placeholder={"Add a comment.."} rows={5}/>
            <button className={css.sendButton} input="button">SEND</button>
        </div>
    );
}

export default Chatbox;