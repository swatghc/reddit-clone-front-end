import React, {useEffect, useState} from 'react';
import {getAllPosts} from '../../services/post.service';
import PostTitle from '../../components/post-title/PostTitle';
import Sidebar from '../../components/side-bar/SideBar';
import SubredditSideBar from '../../components/subreddit-side-bar/Subreddit-side-bar';


const Home: React.FC = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPosts();
      setPost(data.data)
    };
    fetchData();
  }, []);

  return (
    <div className="reddit-body mt-4">
      <div className="container">
        <div className="row">
          <hr/>
          <div className="col-md-9">
            {/*Display Posts*/}

            <PostTitle posts={posts}/>

          </div>

          <div className="col-md-3">
            <Sidebar/>
            <SubredditSideBar/>
          </div>
        </div>

      </div>
    </div>

  )
};

export default Home
