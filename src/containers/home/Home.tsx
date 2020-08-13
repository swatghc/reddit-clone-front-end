import React, {useEffect, useState} from 'react';
import {getAllPosts} from '../../services/post.service';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faComments,faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import PostTitle from '../../components/PostTitle/PostTitle';


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
    <div className="reddit-body">
      <div className="container">
        <div className="row">
          <hr/>
          <div className="col-md-9">
            {/*Display Posts*/}

            {posts.map((post: any) => {
              return (
                <PostTitle post={post}/>
                // <div className="row post">
                //   <div className="col-md-1">
                //     <div className="d-flex flex-column votebox">
                //       <div className="p-2">
                //         <FontAwesomeIcon icon={faChevronUp}/>
                //       </div>
                //       <div className="p-2 votecount">{post.voteCount}</div>
                //       <div className=" p-2">
                //         <FontAwesomeIcon icon={faChevronDown}/>
                //       </div>
                //     </div>
                //   </div>
                //
                //   <div className="col-md-11">
                //     <span className="subreddit-info">
                //         <span className="subreddit-text"><a className="posturl">{post.subredditName}</a></span>
                //         <span> . Posted by <a className="username">{post.userName}</a></span>
                //         <span> . {post.duration}</span>
                //     </span>
                //     <hr/>
                //     <div className="post-title">
                //       <a className="postname">{post.postName}</a>
                //     </div>
                //     <div>
                //       <p className="post-text">{post.description}</p>
                //     </div>
                //     <hr/>
                //     <span>
                //       <a className="btnCommments" role="button">
                //         <FontAwesomeIcon icon={faComments}/>
                //         Comments({post.commentCount})
                //       </a>
                //       <button className="btn btn-primary">
                //           Read Post
                //       </button>
                //     </span>
                //   </div>
                //
                //   <div className="col-md-3">
                //   </div>
                // </div>
              )
            })}


          </div>
        </div>
        <div className="col-md-3">
        </div>
      </div>
    </div>

  )
};

export default Home
