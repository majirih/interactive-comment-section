import React from 'react';
import data from "../data/data.json"
import Chatbox from "../components/chatBox/chatbox";
import Chatbubble from "../components/chatBubble/chatbubble";
import css from "./app.module.css"

function App() {

    return (
        <div className={css.container}>
            <div className={css.app}>
                <div className={css.chat}>
                {
                    data.comments.map((comment) => {
                        return <Chatbubble key={comment.id} comment={comment}/>
                    })
                }
                </div>
                <Chatbox user={data.currentUser}/>
            </div>
        </div>
    );
}

export default App;