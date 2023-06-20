import React from "react";
import ProfileFirstBlock from "./ProfileFirstBlock/ProfileFirstBlock";
import ProfileStoryBlock from "./ProfileStoryBlock/ProfileStoryBlock";
import ProfilePostsCategory from "./ProfilePostsCategory/ProfilePostsCategory";
import ProfilePostsFeaturesContainerE from "./ProfilePostsFeatures/ProfilePostsFeaturesContainer";
import { useParams } from "react-router";
import axios from "axios";
import GetCookie from "../../hook/getCookie";

const Profile = (props) => {
    // let userId = useParams().userId;
    // if(!userId){
    //     userId = props.ProfileId;
    //     props.setUserID(userId);
    // }
    //console.log(props)
    //props.setUserID(userId);
    //console.log(userId);
    // axios.get('http://apeiron-test.kz/getOneUser?userId=' + userId,{
    //     headers:{
    //       Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
    //     }
    //   }).then(response=>{
    //     if(userAccess){
    //       //props.setUserProfile(response.data);
    //       console.log(userAccess);
    //       userAccess = false;
    //     }
        
    // })
    //console.log(userId);
  //console.log(props);
    return(
        <div>
           <ProfileFirstBlock ProfileName={props.ProfileName}
                              ProfileSecondName={props.ProfileSecondName}
                              ProfileStatus={props.ProfileStatus}
                              ProfileEmail={props.ProfileEmail}
                              ProfileLogin={props.ProfileLogin}
                              userAvatar={props.userAvatar}
                              paramsId={props.paramsId}
                              myId={props.myId}
                              follow={props.follow}
                              unfollow={props.unfollow}/>
            {/* <ProfileStoryBlock/> */}
            <ProfilePostsCategory/>
            <ProfilePostsFeaturesContainerE ProfileLogin={props.ProfileLogin}
                                            paramsId={props.paramsId}
                                            userAvatar={props.userAvatar}/>

        </div>

    );
}

export default Profile;