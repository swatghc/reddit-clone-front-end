import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import PostTitle from '../../components/post-title/PostTitle';
import {getPostsByUsername} from '../../services/post.service';
import {getCommentsByUserName} from '../../services/comments.service';

export const UserProfile: React.FC = () => {
  const { name } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const postLength = posts.length;
  const commentLength = comments.length;

  const fetchData = async () =>{
    const userData = await getPostsByUsername(name);
    const commentsData = await getCommentsByUserName(name);
    setPosts(userData.data);
    setComments(commentsData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (<div>
    <div className="container">
      <div>
        Welcome <b>{name}</b>.<br /> You have posted <b>{postLength}</b> time(s) and commented
        <b>{commentLength}</b> time(s).
        You can check your post and comment history below.
      </div>
      <hr />
      <div>
        Your Posts:
      </div>
      <PostTitle posts={posts}/>

      <hr />
      <div>
        Your Comments:
      </div>

      { comments.map((comment: any) => {
        return (<div className="comment" key={comment.id}>
            <div className="username">
              <Link to={`/user/${comment.username}`}>{comment.userName}</Link>
            </div>
            <div>
              <p>{comment.duration}</p>
            </div>
            <b>{comment.text}</b>

          </div>
        )})}
    </div>
  </div>)
};
