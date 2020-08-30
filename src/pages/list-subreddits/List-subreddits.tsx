import React, {useEffect, useState} from 'react';
import {getAllSubreddits} from '../../services/subreddit.service';
import {Link} from 'react-router-dom';
import Sidebar from '../../components/side-bar/SideBar';

export const ListSubreddits: React.FC  = () => {
  const [subreddits, setSubreddits] = useState([]);

  const fetchData = async () => {
    const data = await getAllSubreddits();
    setSubreddits(data.data);
  };


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h2>List of Subreddits</h2>
          <ul>
            {subreddits.map((s: any) => {
              return (
                <li key={s.id}>
                  <Link to={`/view-subreddit/${s.id}`} >{s.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="col-md-3">
          <Sidebar/>
        </div>

      </div>

    </div>
  )
};
