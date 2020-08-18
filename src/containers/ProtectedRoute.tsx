import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/root.reducer';
import {AuthState} from '../actions/user.actions';

type Props = {
  component: React.FC,
  path: string;
}

const ProtectedRoute: React.FC<Props> = ({component, ...rest}) => {
  const authState: AuthState = useSelector((state: RootState) => state.auth);
  const routeComponent = (props: any) => (
    authState.authenticated
      ? React.createElement(component, props)
      : <Redirect to={{pathname: '/login'}}/>
  );
  return <Route {...rest} render={routeComponent}/>;

};

export default ProtectedRoute;
