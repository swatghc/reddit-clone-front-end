import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {Link, useHistory} from 'react-router-dom';
import {loginBtnStyle} from '../buttons/login-button/LoginButton';
import {VoteButton} from '../buttons/vote-button/VoteButton';
import './PostTitle.css';


type PostTitleProps = {
  posts: any[];
}

const PostTitle: React.FC<PostTitleProps> = (props: PostTitleProps) => {
  const posts = props.posts;
  const history = useHistory();

  function goToPost(id: any) {
    history.push(`/view-post/${id}`);
  }

  return (
    <div>
      {posts.map((post: any) => {
        return (
          <div className="row post" key={post.id}>
            <div className="col-md-1">
              <VoteButton post={post}/>
            </div>
            <div className="col-md-11">
              <span className="subreddit-info">
                <span className="subreddit-text">
                  <a className="posturl">{post.subredditName}</a>
                </span>

                <span> . Posted by
                  <Link to={`user/${post.userName}`} className="username">
                    {post.userName}
                  </Link>
                </span>
                <span> . {post.duration}</span>
              </span>
              <hr/>
              <div className="post-title">
                <Link to={post.url} className="postname">{post.postName}</Link>
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

              <button style={loginBtnStyle} onClick={() => goToPost(post.id)}>
                Read Post
              </button>
              </span>
            </div>
          </div>

        )
      })}

    </div>
  );
};

export default PostTitle;
