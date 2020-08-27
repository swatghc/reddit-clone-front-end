import axios from 'axios';
import {clearAlert, errorAlert} from '../actions/alert.action';
import {Dispatch} from 'react';

const base_url = 'http://localhost:8080/api';

export const vote = (dispatch: Dispatch<any>, vote: IVotePayload): Promise<any> => {
  return axios.post(`${base_url}/votes/`, vote)
    .catch((error) => {
      dispatch(errorAlert(error.response.data.message));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000)
    });
};

export interface IVotePayload {
  voteType: VoteType;
  postId: number;
}


export enum VoteType {
  UPVOTE,
  DOWNVOTE,
}
