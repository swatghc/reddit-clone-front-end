import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Subreddit-side-bar.css';

type Props = {
  subreddits: any[];
}

const SubredditSideBar: React.FC<Props> = ({subreddits}) => {
  const [displayViewAll, setViewState] = useState(false);
  return (
    <div>

      <div className="sidebar-view-subreddit">
        <div className="text-dark font-weight-bold">Browse Subreddits</div>
      </div>


      <div>
        {subreddits.map((subreddit: any) => {
          return (
            <span className="subreddit-text">
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
