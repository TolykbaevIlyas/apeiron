import React from "react";
import c from './ProfileFirstBlock.module.css'
import ProfileFirstBlockImg from "./ProfileFirstBlockImg/ProfileFirstBlockImg";
import ProfileFirstBlockInfo from "./ProfileFirstBlockInfo/ProfileFirstBlockInfo";
import ProfileFirstBlockSub from "./ProfileFirstBlockSub/ProfileFirstBlockSub";

const ProfileFirstBlockContainer = () =>{

    return(
        <div className={c.ProfileFirstBlock}>
            <ProfileFirstBlockImg/>
            <ProfileFirstBlockInfo/>
            <ProfileFirstBlockSub/>
          </div>
    );
}

export default ProfileFirstBlockContainer;