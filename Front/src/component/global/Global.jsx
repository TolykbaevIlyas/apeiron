import React from "react";
import GlobalUserBlock from "./GlobalUserBlock";
import c from './Global.module.css';


const Global = (props) => {
  //console.log(props);
  let userData = props.users.map(post => <GlobalUserBlock key={post.id} profileName={post.name} secondName={post.secondName} login={post.login} id={post.id} path={post.userAvatarPath}/>)
    return(
        <div className={c.GlobalBlock}>
          <div className={c.GlobakCategory}>
            {userData}
          </div>
        </div>
    );
}

export default Global;