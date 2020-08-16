import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Subreddit-side-bar.css';
import {getAllSubreddits, ISubreddit} from '../../services/subreddit.service';

const SubredditSideBar: React.FC = () => {
  const [displayViewAll, setViewState] = useState(false);
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSubreddits();
      setSubreddits(data.data);

      if (data.data.length >= 4) {
        setSubreddits(data.data.splice(0, 3));
        setViewState(true);
      } else {
        setSubreddits(data.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="sidebar-view-subreddit">
      <div className="text-dark font-weight-bold">Browse Subreddits</div>

      <div>
        {subreddits.map((subreddit: ISubreddit) => {
          return (
            <span className="d-flex flex-row justify-content-center" key={subreddit.id}>
              <Link to={`/view-subreddit/${subreddit.id}`}>
                {subreddit.name}
              </Link>
            </span>
          )
        })}
      </div>

      {displayViewAll &&
      <div className="text-center">
          <Link to={`/subreddits`}>View All</Link>
      </div>
      }
    </div>
  );
};

export default SubredditSideBar;
