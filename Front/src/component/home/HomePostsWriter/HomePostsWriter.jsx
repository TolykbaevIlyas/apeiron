import React from "react";
import c from './HomePostsWriter.module.css'

const HomePostsWriter = (props) => {
    return(
        <div className={c.WritePostBlock}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Опубликовать</button>
        </div>
    );
}

export default HomePostsWriter;