import React from "react";
import c from './ProfileFirstBlockImg.module.css'
import imgHead from './../../../../assets/img/header.jpg'

const ProfileFirstBlockImg = (props) =>{
    // console.log(props);
    let imagePath = 'http://apeiron-test.kz/' + props.userAvatar;
    let src = props.userAvatar;

    //console.log(src);
    return(
        <div className={c.ProfileImg}>
            <img src={(src != undefined) ? imagePath : imgHead} alt="" />
        </div>
           
    );
}

export default ProfileFirstBlockImg;