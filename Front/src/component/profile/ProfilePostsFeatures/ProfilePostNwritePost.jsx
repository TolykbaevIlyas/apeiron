import React from "react";
import ProfilePost from "./ProfilePosts/ProfilePost";
import ProfileWritePost from "./ProfileWritePost/ProfileWritePost";

// let initialState = {
//     Posts:[
//         {id: 1, data: "1 августа 2020 года", messages: "Привет! Это мой первый пост, надеюсь мы с вами поладим и мой проект сможет реализоваться в полной мере.", likesCount: 15, commetsCount: 3, repostsCount:5},
//         {id: 2, data: "3 августа", messages: "Hi, how are you", likesCount: 10, commetsCount: 10, repostsCount:0},
//         ],
// };


const ProfilePostNwritePost = (props) => {
    //console.log(props);
    let PostsData;
    if(props.Posts != null ){
        PostsData = props.Posts.map(post => <ProfilePost key={post.id} ProfileName={props.ProfileLogin} data={post.data} messages={post.message} like={post.countOfLikes} commetsCount={post.countOfComments}  repostsCount={post.repostsCount} postImage={post.imagePath} userAvatar={props.userAvatar}/>)
    }
    else{

    }
   //let PostsData = props.Posts[0].map(post => <ProfilePost key={post.id} ProfileName={props.ProfileLogin} data={post.data} messages={post.message} like={post.countOfLikes} commetsCount={post.countOfComments}  repostsCount={post.repostsCount} postImage={post.imagePath}/>)

    return(
        <div>
            <ProfileWritePost props={props}/>
            {PostsData}
      </div>
    );
}

export default ProfilePostNwritePost;