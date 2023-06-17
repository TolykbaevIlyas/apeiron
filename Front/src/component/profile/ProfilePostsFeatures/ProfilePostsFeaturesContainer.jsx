import React from 'react';
import { connect } from 'react-redux';
import { addPost, setPosts, toggleIsFetching, updateNewText } from '../../../Redux/posts-reducer';
import ProfilePostNwritePost from './ProfilePostNwritePost';
import GetCookie from '../../../hook/getCookie';
import axios from 'axios';
import ProfilePost from './ProfilePosts/ProfilePost';
import Preloader from '../../common/preloader/preloader';

class ProfilePostsFeaturesContainer extends React.Component{
  async componentDidMount(){
    this.props.toggleIsFetching(true);
    // const Cookie = JSON.parse(GetCookie('usrin'));
    // const CookieToken = Cookie['token'];
    // console.log();
    // console.log(CookieToken);
    let id = this.props.paramsId;
    if(!id){
      id = this.props.authData[0].id;
    }

    if(id === this.props.authData[0].id){
      //console.log(id);
      await axios.get(`http://apeiron-test.kz/posts`,{
          headers:{
            Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
          }
        })
        .then(response =>{
          // console.log(response);
          this.props.setPosts(response.data);
          this.props.toggleIsFetching(false);
          //console.log(response);
          //console.log(this.props);
          //let PostsData = this.props.Posts[0].map(post => <ProfilePost key={post.id} ProfileName={props.ProfileLogin} data={post.data} messages={post.message} like={post.countOfLikes} commetsCount={post.countOfComments}  repostsCount={post.repostsCount} postImage={post.imagePath}/>);
          // Posts = response.data;
        })
    }else{
      const json = JSON.stringify({ 
        "userId": id
      });
      await  axios.post('http://apeiron-test.kz/getOneUserPosts', json,
      {
        headers:{
          Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
        }
      }).then(response => {
          this.props.setPosts(response.data);
          this.props.toggleIsFetching(false);
        })
    }

    
        
       // console.log(id);
  }

  // PostMap = () => {
  //   return this.props.Posts.map(post => <ProfilePost key={post.id} ProfileName={this.props.ProfileLogin} data={post.data} messages={post.message} like={post.countOfLikes} commetsCount={post.countOfComments}  repostsCount={post.repostsCount} postImage={post.imagePath}/>)
  // }

  render(){
    return <>
        {this.props.isFetching ? <Preloader/>:null}
        <ProfilePostNwritePost 
                              ProfileLogin={this.props.ProfileLogin}
                              updataNewPostText={this.props.updateNewText}
                              addPost={this.props.addPost}
                              newPostText={this.props.newPostText}
                              Posts={this.props.posts}
                              SetPosts={this.props.setPosts}
                              userAvatar={this.props.userAvatar}
                              myId={this.props.authData[0].id}
                              id={this.props.paramsId}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return{
      posts: state.PostsData.Posts,
      newPostText: state.PostsData.newPostText,
      profile: state.ProfileData.profile.login,
      authData: state.AuthData.UserAcc
  }
} 


const ProfilePostsFeaturesContainerE = connect(mapStateToProps,{updateNewText,addPost,setPosts,toggleIsFetching})(ProfilePostsFeaturesContainer);

export default ProfilePostsFeaturesContainerE;