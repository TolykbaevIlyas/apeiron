import React from "react";
import c from './ProfileFirstBlockInfo.module.css'

const ProfileFirstBlockInfo = (props) =>{
    return(
        <div className={c.ProfileInfo}>
            <div className={c.ProfileUserName}>
                <h1>{props.ProfileLogin}</h1>
                <div className={c.ProfileOnlineOfflineStatus}></div>
            </div>
            <div className={c.ProfilePostsSubCount}>
                <div>10постов</div>
                <div>20подписчиков</div>
                <div>15подписок</div>
            </div>
            <div className={c.ProfileName}>
                <h2>{props.ProfileName} {props.ProfileSecondName}</h2>
            </div>
            <div className={c.ProfileUserInfoOrStatus}>
                {props.ProfileStatus}
            </div>
            <div className={c.OtherSocial}>
                <div>Instagram</div>
                <div>YouTube</div>
            </div>
        </div>
    );
}

export default ProfileFirstBlockInfo;