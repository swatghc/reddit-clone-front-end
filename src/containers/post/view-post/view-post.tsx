import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getPostByID} from '../../../services/post.service';
import {Link, useHistory} from 'react-router-dom';
import Sidebar from '../../SideBar/SideBar';
import SubredditSideBar from '../../Subreddit-side-bar/Subreddit-side-bar';
import {VoteButton} from '../../VoteButton/VoteButton';

export const ViewPost: React.FC = () => {
  const [post, setPost] = useState({
    subredditName: '',
    duration: '',
    postName: '',
    userName: '',
    description: '',
    url: '',
  });
  const { id } = useParams();

  const fetchData = async () => {
    const data = await getPostByID(id);
    setPost(data.data)
  };


  useEffect(() => {
    fetchData();
  }, []);


  return (<div className="mt-4">
    <div className="container">
      <div className="row">
        <hr />
        <div className="col-md-9">
          <div className="row post">
            <div className="col-md-1">
              <VoteButton post={post}/>
            </div>
            <div className="col-md-11">
          <span>
            <span className="subreddit-text">
              <a className="posturl">{post.subredditName}</a>
            </span>
            <span> . Posted
                <span> {post.duration} </span>
                by
              { !post.userName && <Link className="username" to={'/'}>Anonymous</Link> }
              { !!post.userName && <Link className="username" to={'/'}>{post.userName}</Link> }

            </span>
          </span>
              <hr />
              <Link to={post.url} className="post-title">{post.postName}</Link>
              <div>
                <p className="post-text"> {post.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Sidebar/>
          <SubredditSideBar/>
        </div>
      </div>
    </div>
  </div>);
};
