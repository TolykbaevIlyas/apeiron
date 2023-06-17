import React from "react";
import c from './ProfileWritePost.module.css'
import axios from 'axios';
import GetCookie from "../../../../hook/getCookie";

const ProfileWritePost = (props) => {
    //console.log(props);

    let newPostElement = React.createRef();
    var formData = new FormData();
    var imagefile = document.querySelector('#file');
    const Cookie = JSON.parse(GetCookie('usrin'));
    const CookieToken = Cookie['token'];

    async function SendMessageToServer(path){
      const json = JSON.stringify({ 
          "message": props.props.newPostText,
          "path": path
       });
      await  axios.post('http://apeiron-test.kz/posts/postUploadText', json,{
        headers:{
          Authorization: 'Bearer ' + CookieToken
        }
      }).then(response => {
          // console.log(response.data);
          // console.log(path);
          })
          onAddPost();
          GetPosts();
          // window.location.reload();
  }

    async function SendImgOnServer(){
      formData.append("PostImage", imagefile.files[0]);
      axios.post('http://apeiron-test.kz/posts/postUploadImg', formData, {
          headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + CookieToken
          }
      }).then(response => {
          //console.log(response);
          SendMessageToServer(response.data.path);
          // 
          // onAddPost();
       })

    }

    async function GetPosts(){
      await axios.get(`http://apeiron-test.kz/posts`,{
        headers:{
          Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
        }
      })
      .then(response =>{
        // console.log(response);
        props.props.SetPosts(response.data);
        // console.log(response);
        //console.log(props);
        //console.log(this.props);
        //let PostsData = this.props.Posts[0].map(post => <ProfilePost key={post.id} ProfileName={props.ProfileLogin} data={post.data} messages={post.message} like={post.countOfLikes} commetsCount={post.countOfComments}  repostsCount={post.repostsCount} postImage={post.imagePath}/>);
        // Posts = response.data;
      })
    }
  
    let onAddPost = () => {
      props.props.addPost();
    }
  
    let onPostChange = () =>{
      let text = newPostElement.current.value;
      props.props.updataNewPostText(text);
    }

    let id = props.props.id;
    if(id == null){
      id = props.props.myId;
    }
    //console.log(props.props.myId);
    return<>
        {(props.props.myId != id) ? null : 
        <div className={c.WritePostBlock}>
            <textarea ref={newPostElement} onChange={onPostChange} 
                    value={props.props.newPostText}>
            </textarea>
            <input type="file" name="fiel" id="file"/>
            <button onClick={SendImgOnServer}>Опубликовать</button>
        </div>
        }
    
    </>
}

export default ProfileWritePost;