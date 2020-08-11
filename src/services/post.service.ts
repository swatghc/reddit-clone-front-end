import axios, {AxiosRequestConfig} from 'axios';
import {getJwtToken} from './user.service';

const base_url = 'http://localhost:8080/api';

export const getAllPosts = (): Promise<any> => {
  return axios.get(`${base_url}/posts/`)
    .catch((error) => {
      console.log(error);
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
