import axios from "axios";
import React from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router";
import HomePosts from "./HomePosts";
import { addHomePost, setHomePosts } from "../../../Redux/home-reducer";
import GetCookie from "../../../hook/getCookie";

class HomePostsContainer extends React.Component{
  async componentDidMount(){
      await axios.get('http://apeiron-test.kz/getOneUserPosts',{
         headers:{
           Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
         }
       }).then(response=>{
          //this.props.setUserProfile(response.data);
          //data = response.data;
          // let data1 = {city: 'New York' };
          // let data2 = {...data, ...data1}; 
          //console.log(data2);
          this.props.setHomePosts(response.data);
          //console.log(this.props);
      })
  }

  render(){
    return<>
        {this.props.HomeData.map(post => <HomePosts key={post.id} messages={post.message} like={post.countOfLikes} commetsCount={post.countOfComments} postImage={post.postImagePath} userAvatar={post.userAvatar} userLogin={post.userLogin}/>)
}
        {/* <HomePosts posts={this.props.HomeData}/> */}
    </>
  }
}

let mapStateToProps = (state) => {
  return{
      HomeData: state.HomeData.Posts
  }
} 



export default connect(mapStateToProps,{setHomePosts,addHomePost})(HomePostsContainer);