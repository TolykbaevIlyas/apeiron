import React from "react";
import c from './ProfilePost.module.css'
import imgHead from './../../../../assets/img/header.jpg'

const ProfilePost = (props) => {
    //console.log(props);
    let imageAvatar= 'http://apeiron-test.kz/' + props.userAvatar;
    let imagePath = 'http://apeiron-test.kz/' + props.postImage;
    let src = props.userAvatar;
    return(
        <div className={c.PostBlock}>
            <div className={c.PostBlockImgBlock}>
                <div className={c.PostProfileImg}>
                    <img src={(src != undefined) ? imageAvatar : imgHead} alt="" />
                </div>
            </div>
            <div className={c.PostBlockInfoBlock}>
                <div className={c.PostProfileNameNDate}>
                    <h3>{props.ProfileName}</h3>
                    <p>{props.data}</p>
                </div>
                <div className={c.PostMessages}>
                    {props.messages}
                    <img src={imagePath} className={c.PostImage}></img>
                </div>
                <div className={c.PostFeatures}>
                    <button className={`${c.PostFeaturesButton} ${c.PostFeaturesButtonLike}`}>{props.like} Лайка</button>
                    <button className={`${c.PostFeaturesButton} ${c.PostFeaturesButtonComments}`}>{props.commetsCount} Комментария</button>
                    <button className={`${c.PostFeaturesButton} ${c.PostFeaturesButtonReposts}`}>{props.repostsCount} Репостов</button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePost;