import React from 'react';
import Counter from "../counter/counter";
import css from "./chatbubble.module.css"

function Chatbubble({comment}) {
    return (
        <div className={css.chatbubble}>
            <div className={css.container}>
                <Counter score={comment.score}/>
                <div>
                    <div className={css.bubbleHeader}>
                        <img className={css.profilePicture} src={comment.user.image.png}/>
                        <p className={css.userName}>{comment.user.username}</p>
                        <p className={css.commentDate}>{comment.createdAt}</p>
                    </div>
                    <p>{comment.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Chatbubble;