import React, {useEffect} from 'react';
import './App.css';
import {Header} from './header/Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './containers/sign-up/SignUp';
import Login from './containers/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './reducers/root.reducer';
import {getJwtToken, getUsername} from './services/user.service';
import {renewToken} from './actions/user.actions';
import Home from './containers/home/Home';
import ProtectedRoute from './containers/ProtectedRoute';
import CreateSubReddit from './containers/Create-subreddit/Create-subreddit';
import CreatePost from './containers/post/Create-post/Create-post';
import {ListSubreddits} from './containers/List-subreddits/List-subreddits';
import {ViewPost} from './containers/post/view-post/view-post';
import {UserProfile} from './containers/user-profile/user-profile';


function App() {
  // The selector is approximately equivalent to the mapStateToProps
  const alert = useSelector((state: RootState) => state.alert);

  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getJwtToken() && getUsername() && !authState.loggingIn && !authState.authenticated) {
      renewToken(dispatch);
    }
  });

  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          </div>
        </div>

        <ProtectedRoute path="/home" component={Home}/>
        <ProtectedRoute path="/create-post" component={CreatePost}/>
        <ProtectedRoute path="/create-subreddit" component={CreateSubReddit}/>
        <ProtectedRoute path='/list-subreddits' component={ListSubreddits} />

        <ProtectedRoute path='/view-post/:id'  component={ViewPost} />
        <ProtectedRoute path='/user-profile/:name'  component={UserProfile} />

        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>

      </Router>
    </div>
  );
}

export default App;
