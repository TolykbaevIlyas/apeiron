import React from "react";
import c from './GlobalUserBlock.module.css';
import { NavLink } from 'react-router-dom';
import secondHeader from './../../assets/img/header.jpg'

const GlobalUserBlock = (props) => {
    //console.log(props);
    let imageAvatar= 'http://apeiron-test.kz/' + props.path;
    let src = props.path;
    return(
        <div className={c.userBlock}>
          <NavLink to={'/profile/' + props.id}>
            <div className={c.UserBlockInner}>
              <div className={c.AvatarInner}>
                      <img src={(src != undefined) ? imageAvatar : secondHeader}/>
              </div>
              <div className={c.usersInfo}>
                <div>
                    <p>{props.profileName} {props.secondName}</p>
                </div>
                <div>
                    <p>{props.login}</p>
                </div>
              </div>
            </div>
          </NavLink>
      </div>
    );
}

export default GlobalUserBlock;