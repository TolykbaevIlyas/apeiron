import React from "react";
import c from './ProfilePostsCategory.module.css'


const ProfilePostsCategory = (props) => {
    return(
        <div className={c.CategoryBlock}>
            <a href="#Post">Посты</a>
            <a href="?">Фото</a>
            <a href="#">Видео</a>
            <a href="#">Отметки</a>
        </div>
    );
}

export default ProfilePostsCategory;