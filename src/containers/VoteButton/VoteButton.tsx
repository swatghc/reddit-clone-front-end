import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import './VoteButton.css';
import {IVotePayload, vote as voteAPI, VoteType} from '../../services/vote.service';
import {getPostByID} from '../../services/post.service';
import {useDispatch} from 'react-redux';

type VoteButtonProps = {
  post: any
}

export const VoteButton: React.FC<VoteButtonProps> = (props: VoteButtonProps ) => {
  const [post, setPost] = useState(props.post);
  const dispatch = useDispatch();

  const upvotePost = () => {
    doVote({
      voteType: VoteType.UPVOTE,
      postId: post.id,
    });
  };
  const downvotePost = () => {
    doVote({
      voteType: VoteType.DOWNVOTE,
      postId: post.id,
    });
  };

  async function doVote(vote: IVotePayload) {
    const voteResp = await voteAPI(dispatch, vote);
    const postResp = await getPostByID(post.id);
    setPost(postResp.data);
  }

  return (
    <div className="d-flex flex-column votebox" >
      <div className="p-2">
        <FontAwesomeIcon className={'upvote ' + post.upVote ? 'text-success' : ''} icon={faChevronUp} color="upvoteColor" onClick={upvotePost}/>
      </div>
      <div className="p-2 votecount">{post.voteCount}</div>
      <div className="p-2">
        <FontAwesomeIcon className={'downvote ' + post.downvote ? 'text-danger' : ''} icon={faChevronDown} color="downvote"  onClick={downvotePost}/>
      </div>
    </div>
  )
};
