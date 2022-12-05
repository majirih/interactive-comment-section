import React from 'react';
import css from "./counter.module.css"

function Counter({score}) {
    return (
        <div className={css.counter}>
            <img src={"./images/icon-plus.svg"}/>
            <div className={css.score}>
            <p>{score}</p>
            </div>
            <img src={"./images/icon-minus.svg"}/>
            </div>
    );
}

export default Counter;