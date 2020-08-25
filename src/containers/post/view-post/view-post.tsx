import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {createPost, getPostByID} from '../../../services/post.service';
import {Link} from 'react-router-dom';
import Sidebar from '../../SideBar/SideBar';
import SubredditSideBar from '../../Subreddit-side-bar/Subreddit-side-bar';
import {VoteButton} from '../../VoteButton/VoteButton';
import './view-post.css';
import {getCommentsByPostID, postComment} from '../../../services/comments.service';
import {useDispatch} from 'react-redux';

export const ViewPost: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await getPostByID(id);
    setPost(data.data);
    const comments = await getCommentsByPostID(id);
    setComments(comments.data);
  };


  useEffect(() => {
    fetchData();
  }, []);

  const [post, setPost] = useState({
    subredditName: '',
    duration: '',
    postName: '',
    userName: '',
    description: '',
    url: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [comments, setComments] = useState([]);

  const [input, setInput] = useState({
    comment: ''
  });

  const inputComment = input.comment;

  function handleChange(e: any) {
    const {name, value} = e.target;
    setInput(inputs => ({...inputs, [name]: value}));
  }

  function submit(e: any) {
    e.preventDefault();
    setSubmitted(true);
    if (inputComment) {
      postComment(dispatch, {text: inputComment, postId: id}).then(
        (resp) => {
          setInput({comment: ''});
          fetchData();
        }
      )
    }
  }

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

              <div className="post-comment">
                <form>
                  <div className="form-group">
                    <textarea className="form-control" name='comment' value={inputComment} onChange={handleChange} placeholder="Your Thoughts?" onClick={handleChange} />
                  </div>
                  <button type="button" className="comment float-right" onClick={submit}>Comment</button>
                </form>
              </div>
              {comments.map((comment: any) => {
                return (
                  <div className="mt-5" key={comment.id}>
                    <div className="comment">
                      <div className="username">
                        <Link to={`/user/${comment.userName}`}>{comment.userName}</Link>
                      </div>
                      <div>
                      <p>{comment.duration}</p>
                    </div>
                      <b>{comment.text}</b>
                    </div>
                  <hr />
                </div>)
              })}

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
