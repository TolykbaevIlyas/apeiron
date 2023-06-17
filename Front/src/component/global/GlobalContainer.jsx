import React from "react";
import Global from "./Global";
import { addUsers, setUsers } from "../../Redux/global-reducer";
import GetCookie from "../../hook/getCookie";
import { connect } from 'react-redux';
import axios from 'axios';

class GlobalContainer extends React.Component{
    async componentDidMount(){
      await axios.get(`http://apeiron-test.kz/userAll`,{
            headers:{
              Authorization: 'Bearer ' + JSON.parse(GetCookie('usrin'))['token']
            }
          })
          .then(response =>{
            //console.log(response.data);
            this.props.setUsers(response.data);
            // this.props.setPosts(response.data);
            // this.props.toggleIsFetching(false);
          })
          //console.log(this.props);

    }

    render(){
      return <>
          <Global users={this.props.Users}/>
      </>
    }
  }
  
  let mapStateToProps = (state) => {
    return{
        Users: state.GlobalData.Users,
    }
  } 
  
  
  const GlobalContainerE = connect(mapStateToProps,{addUsers,setUsers})(GlobalContainer);
  
  export default GlobalContainerE;