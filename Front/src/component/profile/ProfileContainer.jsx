import axios from "axios";
import React from "react";
import GetCookie from "../../hook/getCookie";
import c from './Profile.module.css'
import { setUserProfile } from "../../Redux/posts-reducer";
import { connect } from 'react-redux';
import Profile from "./Profile";
import { follow, setUsers, setUsersID, unfollow } from "../../Redux/users-reducer";
import { useParams } from "react-router";
//import withRouter from "../../hoc/withRouter";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ProfileContainer extends React.Component{
  async componentDidMount(){

      // await axios.get(`http://apeiron-test.kz/userAccess`,{
      //   headers:{
      //     Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
      //   }
      // }).then(response =>{
      //   this.props.setUserProfile(response.data);
      //   //console.log(this.props);
      // })

      let id = this.props.params['userId'];
      if(!id){
        id = this.props.authData[0].id;
      }
      //onsole.log(id);
      let data = {};
      let path = {};

      await axios.get('http://apeiron-test.kz/getOneUser?userId=' + id,{
         headers:{
           Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
         }
       }).then(response=>{
          //this.props.setUserProfile(response.data);
          data = response.data;
          // let data1 = {city: 'New York' };
          // let data2 = {...data, ...data1}; 
          //console.log(data2);
      })

      await axios.get('http://apeiron-test.kz/getUserAvatar?userId=' + id,{
         headers:{
           Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
         }
       }).then(response=>{
          path = response.data;
          //console.log(response);
      })
      let data3 = {...data, path};
      this.props.setUserProfile(data3);

     //console.log(this.props);

      

      //console.log(this.props.userID);
      //let { id } = this.props.params;
      //console.log(id);
      //this.fetchData(id);
      //console.log(this.props);
      // if(!userId){
      //   userId = 2;
      //}
      // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      //   .then(response =>{
      //       this.props.setUserProfile(response.data);
      //   });
  }

  render(){
    return(
      <div className={c.Main}>
        <Profile            ProfileName={this.props.profile.name}
                            ProfileSecondName={this.props.profile.secondName}
                            ProfileStatus={this.props.profile.status}
                            ProfileEmail={this.props.profile.email}
                            ProfileLogin={this.props.profile.login}
                            ProfileId={this.props.profile.id}
                            setUsers={this.props.setUsers}
                            setUserProfile={this.props.setUserProfile}
                            setUserID={this.props.setUsersID}
                            paramsId={this.props.params['userId']}
                            userAvatar={this.props.profile.path}
                            myId={this.props.authData[0].id}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}/>

    </div>
  )
  }
}

let mapStateToProps = (state) => {
  return{
      profile: state.ProfileData.profile,
      users: state.UsersData.users,
      userID: state.UsersData.userId,
      authData: state.AuthData.UserAcc
  }
} 


let WithUrlDataContainerComponent = withParams(ProfileContainer);


export default connect(mapStateToProps,{setUserProfile,setUsers,setUsersID,follow,unfollow})(WithUrlDataContainerComponent);