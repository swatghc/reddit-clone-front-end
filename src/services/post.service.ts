import axios, {AxiosRequestConfig} from 'axios';
import {getJwtToken} from './user.service';
import {CreatePostPayload} from '../pages/post/create-post/Create-post';
import {Dispatch} from 'react';
import {clearAlert, errorAlert, successAlert} from '../actions/alert.action';

const base_url = 'http://localhost:8080/api';

export const getAllPosts = (): Promise<any> => {
  return axios.get(`${base_url}/posts/`)
    .catch((error) => {
      console.log(error);
    });
};

export const getPostByID = (id: string): Promise<any> => {
  return axios.get(`${base_url}/posts/${id}`)
    .catch((error) => {
      console.log(error);
    });
};

export const getPostsByUsername = (name: string): Promise<any> => {
  return axios.get(`${base_url}/posts/by-user/${name}`)
    .catch((error) => {
      console.log(error);
    });
};

export const createPost = (dispatch: Dispatch<any>, post: CreatePostPayload): Promise<any> => {
  return axios.post(`${base_url}/posts/`, post)
    .then((response) => {
      dispatch(successAlert(`Subreddit ${post.postName} successfully created`));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000);
      return response;
    })
    .catch((error) => {
      dispatch(errorAlert(error.message));
      setTimeout(() => {
        dispatch(clearAlert(''))
      }, 3000)
    });
};


axios.interceptors.request.use(function (config: AxiosRequestConfig) {
  // Do something before request is sent
  if (getJwtToken()) {
    config.headers = {Authorization: getJwtToken()};
  }
  return config;
}, (error: any) => {
  return Promise.reject(error)
});
