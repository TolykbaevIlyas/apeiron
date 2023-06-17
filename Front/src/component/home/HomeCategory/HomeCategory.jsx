import React from "react";
import c from './HomeCategory.module.css'


const HomeCategory = (props) => {
    return(
        <div className={c.CategoryBlock}>
            <a href="#">Посты</a>
            <a href="#">Фото</a>
            <a href="#">Видео</a>
            <a href="#">Отметки</a>
        </div>
    );
}

export default HomeCategory;