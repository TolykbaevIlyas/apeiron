import React from "react";
import c from './ProfileFirstBlock.module.css'
import ProfileFirstBlockImg from "./ProfileFirstBlockImg/ProfileFirstBlockImg";
import ProfileFirstBlockInfo from "./ProfileFirstBlockInfo/ProfileFirstBlockInfo";
import ProfileFirstBlockSub from "./ProfileFirstBlockSub/ProfileFirstBlockSub";

const ProfileFirstBlock = (props) =>{
    //console.log(props);
    return(
        <div className={c.ProfileFirstBlock}>
            <ProfileFirstBlockImg userAvatar={props.userAvatar}/>
            <ProfileFirstBlockInfo ProfileName={props.ProfileName}
                                    ProfileSecondName={props.ProfileSecondName}
                                    ProfileStatus={props.ProfileStatus}
                                    ProfileEmail={props.ProfileEmail}
                                    ProfileLogin={props.ProfileLogin}
                                    />
            <ProfileFirstBlockSub paramsId={props.paramsId}
                                    myId={props.myId}
                                    follow={props.follow}
                                    unfollow={props.unfollow}/>
          </div>
    );
}

export default ProfileFirstBlock;