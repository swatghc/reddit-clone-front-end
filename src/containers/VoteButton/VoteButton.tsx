import React, {FunctionComponent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import './VoteButton.css';

type VoteButtonProps = {
  post: any
}

export const VoteButton: React.FC<VoteButtonProps> = (props ) => {
  const post = props.post;
  const upvotePost = () => {};
  const downvotePost = () => {};

  return (
    <div className="d-flex flex-column votebox">
      <div className="p-2">
        <FontAwesomeIcon className="upvote" icon={faChevronUp} color="upvoteColor" onClick={upvotePost}/>
      </div>
      <div className="p-2 votecount">{post.voteCount}</div>
      <div className="p-2">
        <FontAwesomeIcon className="downvote" icon={faChevronDown} color="downvote"  onClick={downvotePost}/>
      </div>
    </div>
  )
};
