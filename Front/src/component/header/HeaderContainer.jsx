import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header';
import GetCookie from '../../hook/getCookie';
import store from '../../Redux/redux-store';
import { setPath } from '../../Redux/header-ruducer';


class HeaderContainer extends React.Component{
  async componentDidMount(){
    await axios.get('http://apeiron-test.kz/getUserAvatar?userId=' + this.props.userId,{
         headers:{
           Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
         }
       }).then(response=>{
          this.props.setPath(response.data);
          console.log("11");
      })
  }
  
  render(){
    return <>
        {(this.props.userAccess != false) ? <Header userAvatar={this.props.path}/> : null}
        
    </>
  }
}

let mapStateToProps = (state) => {
  return{
      userAccess: state.AuthData.UserAcc[0].UserAccess,
      profile: state.ProfileData.profile,
      userId: state.AuthData.UserAcc[0].id,
      path: state.HeaderData.path
  }
} 


const HeaderContainerE = connect(mapStateToProps,{setPath})(HeaderContainer);

export default HeaderContainerE;