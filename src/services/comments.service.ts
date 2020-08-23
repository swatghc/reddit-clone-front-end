import axios from 'axios';
import {Dispatch} from 'react';
import {clearAlert, errorAlert, successAlert} from '../actions/alert.action';

const base_url = 'http://localhost:8080/api';

export const getCommentsByPostID = (id: string): Promise<any> => {
  return axios.get(`${base_url}/comments/by-post/${id}`)
    .catch((error) => {
      console.log(error);
    });
};

export const postComment = (dispatch: Dispatch<any>, comment: CommentPayload) => {
  return axios.post(`${base_url}/comments/`, comment)
    .then((response) => {
      dispatch(successAlert(`Comment successfully created`));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000)

    })
    .catch((error) => {
      dispatch(errorAlert(error.message));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000)
    });
};



export interface CommentPayload {
  text: string;
  postId: string;
  username?:string;
  duration?: string;
}
