import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './home/Home';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/root.reducer';
import {AuthState} from '../actions/user.actions';

const ProtectedRoute: React.FC = () => {
  const authState: AuthState = useSelector((state: RootState) => state.auth);

  return authState.authenticated ? (<Home/>) : (<Redirect to={{pathname: '/login'}} />);
};

export default ProtectedRoute;
