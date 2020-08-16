import axios from 'axios';
const base_url = 'http://localhost:8080/api';

export const getAllSubreddits = (): Promise<any> => {
  return axios.get(`${base_url}/subreddit/`)
    .catch((error) => {
      console.log(error);
    });
};

export interface ISubreddit {
  id?: number;
  name: string;
  description: string;
  postCount?: number;
}
