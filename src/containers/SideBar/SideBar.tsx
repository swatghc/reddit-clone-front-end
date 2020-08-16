import React from 'react';
import './SideBar.css';

type Props = {}


const Sidebar: React.FC = ({}: Props) => {
  const goToCreatePost = () => {
  };
  const goToCreateSubreddit = () => {
  };

  return (
    <div className="sidebar">
      <img src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"/>
      <div className="text-center">
        Welcome to Spring Reddit Clone home page. Come here to check in with your favorite subreddits.
      </div>

      <div className="text-center">
        <button className="btnCreatePost" onClick={goToCreatePost}>Create Post</button>
      </div>

      <div className="text-center">
        <button className="btnCreateSubreddit" onClick={goToCreateSubreddit}>Create Subreddit</button>
      </div>
    </div>
  )
};

export default Sidebar
