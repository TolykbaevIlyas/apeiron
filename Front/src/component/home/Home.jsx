import React from "react";
import c from './Home.module.css';
import { NavLink } from 'react-router-dom';
import HomeCategory from "./HomeCategory/HomeCategory";
import HomePosts from "./HomePosts/HomePosts";
import HomePostsWriter from "./HomePostsWriter/HomePostsWriter";
import HomeStoryBlock from "./HomeStoryBlock/HomeStoryBlock";
import HomePostsContainer from "./HomePosts/HomePostsContainer";

const Home = (props) => {
    return(
        <div className={c.Main}>
          <HomeStoryBlock/>
          <HomeCategory/>
          <HomePostsWriter/>
          <HomePostsContainer/>
      </div>
    );
}

export default Home;