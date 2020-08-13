import React, {FunctionComponent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {loginBtnStyle} from '../LoginButton/LoginButton';
import {VoteButton} from '../../containers/VoteButton/VoteButton';
import './PostTitle.css';


type PostTitleProps = {
  post: any;
}

const PostTitle: FunctionComponent<PostTitleProps> = ({post}) => {
  return (
    <div className="row post">
      <div className="col-md-1">
        <VoteButton post={post}/>
      </div>
      <div className="col-md-11">
        <span className="subreddit-info">
            <span className="subreddit-text">
              <a className="posturl">{post.subredditName}</a>
            </span>

            <span> . Posted by
              <Link to={`user/${post.userName}`}>
                <a className="username">{post.userName}</a>
              </Link>
            </span>

            <span> . {post.duration}</span>
        </span>
        <hr/>
        <div className="post-title">
          <Link to={post.url}>
            <a className="postname">{post.postName}</a>
          </Link>
        </div>
        <div>
          <p className="post-text">{post.description}</p>
        </div>

        <hr/>

        <span>
          <a className="btnCommments" role="button">
            <FontAwesomeIcon icon={faComments}/>
            Comments({post.commentCount})
          </a>

          <button style={loginBtnStyle}>
            Read Post
          </button>
        </span>
      </div>
    </div>
  );
};

export default PostTitle;
