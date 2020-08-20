import axios from 'axios';
import {clearAlert, errorAlert, successAlert} from '../actions/alert.action';
import {Dispatch} from 'react';
const base_url = 'http://localhost:8080/api';

export const getAllSubreddits = (): Promise<any> => {
  return axios.get(`${base_url}/subreddit/`)
    .catch((error) => {
      console.log(error);
    });
};

export const createSubReddit = (dispatch: Dispatch<any>, subreddit: ISubreddit): Promise<any> => {
  return axios.post(`${base_url}/subreddit/`, subreddit)
    .then((response) => {
      dispatch(successAlert(`Subreddit ${subreddit.name} successfully created`));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000)

    })
    .catch((error) => {
      dispatch(errorAlert(error.message));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000)
      console.log(error);
    });
};

export interface ISubreddit {
  id?: number;
  name: string;
  description: string;
  postCount?: number;
}
