import React, {useEffect, useState} from 'react';
import {getSubredditByID} from '../../services/subreddit.service';
import {useParams} from 'react-router-dom';

export const Subreddit: React.FC = () => {
  const [subreddit, setSubreddit] = useState<Subreddit>({
    name: '',
    description: '',
    numberOfPosts: 0
  });
  const { id } = useParams();


  async function fetchData() {
    const data = await getSubredditByID(id);
    setSubreddit(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="card">
        <div className="card-body">
          <dl className="row">
            <dt className="col-sm-3">Subreddit Name</dt>
            <dd className="col-sm-9">{subreddit.name}</dd>

            <dt className="col-sm-3">Description</dt>
            <dd className="col-sm-9">{subreddit.description}</dd>

            <dt className="col-sm-3">Number of post</dt>
            <dd className="col-sm-9">{subreddit.numberOfPosts}</dd>
          </dl>

        </div>
      </div>

    </div>
  );
};

export type Subreddit = {
  name: string;
  description: string;
  numberOfPosts: number;
}
