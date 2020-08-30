import React, {useEffect} from 'react';
import './App.css';
import {Header} from './header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from './pages/sign-up/SignUp';
import Login from './pages/login/Login';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './reducers/root.reducer';
import {getJwtToken, getUsername} from './services/user.service';
import {renewToken} from './actions/user.actions';
import Home from './pages/home/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import CreateSubReddit from './pages/create-subreddit/Create-subreddit';
import CreatePost from './pages/post/create-post/Create-post';
import {ListSubreddits} from './pages/list-subreddits/List-subreddits';
import {ViewPost} from './pages/post/view-post/view-post';
import {UserProfile} from './pages/user-profile/user-profile';


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
