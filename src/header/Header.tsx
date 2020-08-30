import * as React from "react";
import { LoginButton } from "../components/buttons/login-button/LoginButton";
import SignUpButton from "../components/buttons/sign-up-button/SignUpButton";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reducers/root.reducer';
import {AuthState, LogoutRequest} from '../actions/user.actions';
import { Dropdown } from 'react-bootstrap';
import {getRefreshToken, getUsername, logout as logoutReq} from '../services/user.service';

import {useHistory} from 'react-router-dom';
import './Header.css';


export const Header = () =>  {
  const authState: AuthState = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();


  // if (authState.authenticated && authState.loggingIn) {
  //   history.push('/home');
  // }

  async function logout() {
    const logoutRequest: LogoutRequest = {
      username: getUsername() || '',
      refreshToken: getRefreshToken() || '',
    };
    if (logoutRequest) {
      const resp = await logoutReq(dispatch, logoutRequest);
      if (resp) {
        window.location.reload();
      }
    }

  }

  function goToUserProfile() {
    history.push(`/user-profile/${authState.username}`);
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img width="30" height="30" loading="lazy" className="d-inline-block align-top mr-1"
             src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2"></img>
        Reddit
      </a>
      { !authState.authenticated &&
        <div className="d-flex">
          <LoginButton></LoginButton>
          <SignUpButton></SignUpButton>
        </div>
      }

      { authState.authenticated &&
      <div className="d-flex">
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                <img className="account-icon" src="https://www.redditstatic.com/avatars/avatar_default_08_D4E815.png"/>
                  {authState.username}
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item" onClick={goToUserProfile}>Profile</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

      </div>
      }

    </nav>
  );
};
