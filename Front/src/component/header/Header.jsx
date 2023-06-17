import React from "react";
import c from './header.module.css'
import { NavLink } from 'react-router-dom';
import imgHead from './../../assets/img/header.jpg'
import store from "../../Redux/redux-store";


const Header = (props) => {
    //console.log(props);

    let imagePath = 'http://apeiron-test.kz/' + props.userAvatar;
    let src = props.userAvatar;

    return(
      <div className={c.header}>
        <div className={c.Logo}>
          <p>Apeiron</p>
          {/* <div className={c.Find}>
            <textarea></textarea>
            <button>Send</button>
          </div> */}
        </div>
        <div className={c.NavBar}>
          <div className={c.NavBarItem}>
            <NavLink to="/home">Home</NavLink>
          </div>
          <div className={c.NavBarItem}>
            <NavLink to="/global">Global</NavLink>
          </div>
          <div className={c.NavBarItem}>
            <NavLink to="/messages">Messages</NavLink>
          </div>
          <div className={c.NavBarItem}>
            <NavLink to="/noticfication">Noticfication</NavLink>
          </div>
          {/* <div className={c.NavBarItem}>
            <NavLink to="/newpost">NewPost</NavLink>
          </div> */}
          <div className={c.NavBarItem}>
          </div>
          <div className={c.NavBarItem}>
            <NavLink to="/music">Music</NavLink>
          </div>
        </div>
        <NavLink to="/profile" className={c.Avatar}>
          <div className={c.AvatarInner}>
            <img src={(src != undefined) ? imagePath : imgHead}/>
          </div>
        </NavLink>
      </div>
    );
}

export default Header;