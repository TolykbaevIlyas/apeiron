import React from "react";
import imgHead from './../../../assets/img/header.jpg'
import c from './HomePosts.module.css';

const HomePosts = (props) => {
    let imageAvatar= 'http://apeiron-test.kz/' + props.userAvatar;
    let imagePath = 'http://apeiron-test.kz/' + props.postImage;
    let src = props.userAvatar;
    //console.log(props);
    return(
        <div className={c.PostBlock}>
            <div className={c.PostBlockImgBlock}>
                <div className={c.PostProfileImg}>
                    <img src={(src != undefined) ? imageAvatar : imgHead} alt="" />
                </div>
            </div>
            <div className={c.PostBlockInfoBlock}>
                <div className={c.PostProfileNameNDate}>
                    <h3>{props.userLogin}</h3>
                    <p> 1 августа 2020</p>
                </div>
                <div className={c.PostMessages}>
                    {props.messages}
                    <img src={imagePath} className={c.PostImage}></img>
                </div>
                <div className={c.PostFeatures}>
                    <button className={`${c.PostFeaturesButton} ${c.PostFeaturesButtonLike}`}>{props.like} ЛайкOv</button>
                    <button className={`${c.PostFeaturesButton} ${c.PostFeaturesButtonComments}`}>{props.commentsCount} КомментOv</button>
                    <button className={`${c.PostFeaturesButton} ${c.PostFeaturesButtonReposts}`}>20 Репосты</button>
                </div>
            </div>
        </div>
    );
}

export default HomePosts;